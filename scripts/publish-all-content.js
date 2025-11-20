/**
 * Publish all FAQ sections and topics
 *
 * Usage: node scripts/publish-all-content.js
 */

async function publishAllContent() {
  const { createStrapi, compileStrapi } = require("@strapi/strapi");
  let app;

  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = "error";

    global.strapi = app;

    console.log("📝 Publishing all FAQ content...\n");

    // Get all sections
    const allSections = await app.entityService.findMany(
      "api::faq-section.faq-section",
      {
        populate: "*",
      }
    );

    console.log(`📊 Found ${allSections?.length || 0} sections\n`);

    let sectionPublished = 0;
    let sectionSkipped = 0;

    // Publish all sections
    for (const section of allSections || []) {
      if (!section.publishedAt) {
        try {
          // Use documentService.publish for i18n content
          if (section.locale && section.documentId) {
            await app.documents('api::faq-section.faq-section').publish({
              documentId: section.documentId,
              locale: section.locale,
            });
          } else {
            // Fallback to entityService if documentId not available
            const updateOptions = {
              data: {
                publishedAt: new Date(),
              },
            };
            if (section.locale) {
              updateOptions.locale = section.locale;
            }
            await app.entityService.update(
              "api::faq-section.faq-section",
              section.id,
              updateOptions
            );
          }
          console.log(
            `✅ Published section: ${section.sectionName} (${section.locale || "N/A"})`
          );
          sectionPublished++;
        } catch (error) {
          console.error(
            `❌ Error publishing section ${section.sectionName}:`,
            error.message
          );
        }
      } else {
        sectionSkipped++;
      }
    }

    console.log(
      `\n📊 Sections: ✅ Published ${sectionPublished} | ⏭️  Already published ${sectionSkipped}\n`
    );

    // Get all topics
    const allTopics = await app.entityService.findMany(
      "api::faq-topic.faq-topic",
      {
        populate: "*",
      }
    );

    console.log(`📊 Found ${allTopics?.length || 0} topics\n`);

    let topicPublished = 0;
    let topicSkipped = 0;

    // Publish all topics
    for (const topic of allTopics || []) {
      if (!topic.publishedAt) {
        try {
          // Use documentService.publish for i18n content
          if (topic.locale && topic.documentId) {
            await app.documents('api::faq-topic.faq-topic').publish({
              documentId: topic.documentId,
              locale: topic.locale,
            });
          } else {
            // Fallback to entityService if documentId not available
            const updateOptions = {
              data: {
                publishedAt: new Date(),
              },
            };
            if (topic.locale) {
              updateOptions.locale = topic.locale;
            }
            await app.entityService.update(
              "api::faq-topic.faq-topic",
              topic.id,
              updateOptions
            );
          }
          console.log(
            `✅ Published topic: ${topic.topicTranslation} (${topic.locale || "N/A"})`
          );
          topicPublished++;
        } catch (error) {
          console.error(
            `❌ Error publishing topic ${topic.topicTranslation}:`,
            error.message
          );
        }
      } else {
        topicSkipped++;
      }
    }

    console.log(
      `\n📊 Topics: ✅ Published ${topicPublished} | ⏭️  Already published ${topicSkipped}\n`
    );

    console.log("=".repeat(50));
    console.log("📊 FINAL SUMMARY:");
    console.log(`   Sections: ✅ ${sectionPublished} | ⏭️  ${sectionSkipped}`);
    console.log(`   Topics: ✅ ${topicPublished} | ⏭️  ${topicSkipped}`);
    console.log("=".repeat(50));

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

publishAllContent();

