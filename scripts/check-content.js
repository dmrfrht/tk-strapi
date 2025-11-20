/**
 * Check FAQ content in database
 *
 * Usage: node scripts/check-content.js
 */

async function checkContent() {
  const { createStrapi, compileStrapi } = require("@strapi/strapi");
  let app;

  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = "error";

    global.strapi = app;

    console.log("🔍 Checking FAQ content...\n");

    // Check all sections without any filters
    const allSections = await app.entityService.findMany(
      "api::faq-section.faq-section",
      {
        populate: "*",
      }
    );

    console.log(`📊 Total Sections Found: ${allSections?.length || 0}\n`);

    if (allSections && allSections.length > 0) {
      for (const section of allSections) {
        console.log(`Section ID: ${section.id}`);
        console.log(`  - sectionName: ${section.sectionName}`);
        console.log(`  - sectionTranslation: ${section.sectionTranslation}`);
        console.log(`  - locale: ${section.locale || "N/A"}`);
        console.log(
          `  - publishedAt: ${section.publishedAt || "NOT PUBLISHED"}`
        );
        console.log(`  - topics count: ${section.topics?.length || 0}`);
        console.log("");
      }
    } else {
      console.log("❌ No sections found in database!");
    }

    // Check all topics
    const allTopics = await app.entityService.findMany(
      "api::faq-topic.faq-topic",
      {
        populate: "*",
      }
    );

    console.log(`📊 Total Topics Found: ${allTopics?.length || 0}\n`);

    if (allTopics && allTopics.length > 0) {
      console.log("Sample topics:");
      for (let i = 0; i < Math.min(3, allTopics.length); i++) {
        const topic = allTopics[i];
        console.log(
          `  - ${topic.topicTranslation} (locale: ${topic.locale || "N/A"}, published: ${topic.publishedAt ? "YES" : "NO"})`
        );
      }
    } else {
      console.log("❌ No topics found in database!");
    }

    // Check specific locale
    console.log("\n🔍 Checking tr-TR locale specifically...");
    const trSections = await app.entityService.findMany(
      "api::faq-section.faq-section",
      {
        locale: "tr-TR",
        populate: {
          topics: true,
        },
      }
    );
    console.log(`Found ${trSections?.length || 0} sections in tr-TR locale`);

    await app.destroy();
    process.exit(0);
  } catch (error) {
    console.error("❌ Fatal error:", error);
    if (app) {
      await app.destroy();
    }
    process.exit(1);
  }
}

checkContent();
