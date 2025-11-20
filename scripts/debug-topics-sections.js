/**
 * Debug script to check topic-section relationships
 *
 * Usage: node scripts/debug-topics-sections.js
 */

async function debugTopicsSections() {
  const { createStrapi, compileStrapi } = require("@strapi/strapi");
  let app;

  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = "error";

    global.strapi = app;

    console.log("🔍 Debugging topic-section relationships...\n");

    const locale = "en-US";

    // Get all sections for en-US
    const sections = await app.entityService.findMany(
      "api::faq-section.faq-section",
      {
        locale: locale,
        sort: ["order:asc"],
      }
    );

    console.log(`📊 Found ${sections?.length || 0} sections in ${locale}\n`);

    // Get all topics for en-US
    const allTopics = await app.entityService.findMany(
      "api::faq-topic.faq-topic",
      {
        locale: locale,
        populate: {
          section: true,
        },
      }
    );

    console.log(`📊 Found ${allTopics?.length || 0} topics in ${locale}\n`);

    // Check each section
    for (const section of sections || []) {
      console.log(`\n📦 Section: ${section.sectionName} (ID: ${section.id}, documentId: ${section.documentId})`);
      console.log(`   Locale: ${section.locale}`);
      console.log(`   Published: ${section.publishedAt ? "YES" : "NO"}`);

      // Find topics that reference this section
      const topicsForSection = (allTopics || []).filter((topic) => {
        if (!topic.section) return false;
        return (
          topic.section.id === section.id ||
          topic.section.documentId === section.documentId
        );
      });

      console.log(`   Topics found by relation: ${topicsForSection.length}`);

      // Try direct query
      const directTopics = await app.entityService.findMany(
        "api::faq-topic.faq-topic",
        {
          locale: locale,
          filters: {
            section: {
              id: section.id,
            },
          },
        }
      );

      console.log(`   Topics found by direct query: ${directTopics?.length || 0}`);

      if (topicsForSection.length > 0) {
        console.log(`   Sample topics:`);
        topicsForSection.slice(0, 3).forEach((topic) => {
          console.log(
            `     - ${topic.topicTranslation} (ID: ${topic.id}, section ID: ${topic.section?.id}, section locale: ${topic.section?.locale})`
          );
        });
      }
    }

    // Check topics without sections
    const topicsWithoutSection = (allTopics || []).filter(
      (topic) => !topic.section
    );
    if (topicsWithoutSection.length > 0) {
      console.log(
        `\n⚠️  Found ${topicsWithoutSection.length} topics without section relation`
      );
    }

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

debugTopicsSections();

