/**
 * Import CORPORATE CLUB section topics to Strapi
 * 
 * Usage: node scripts/import-corporate-club-topics.js
 */

const topics = [
  {
    "topicName": "TCC Advantages",
    "topicTranslation": "Avantajlar",
    "sectionName": "7 CORPORATE CLUB",
    "sectionTranslation": "CORPORATE CLUB",
    "tcmID": "tcm:92-135763-16",
    "linkUri": "/tr-tr/bilgi-edin/corporate-club-sss-avantajlar/index.html",
    "uniqueId": "Avantajlar",
    "seoUrl": "tcc-advantages-questions",
    "metadata": null
  },
  {
    "topicName": "TCC Application",
    "topicTranslation": "Başvuru",
    "sectionName": "7 CORPORATE CLUB",
    "sectionTranslation": "CORPORATE CLUB",
    "tcmID": "tcm:92-178047-16",
    "linkUri": "/tr-tr/bilgi-edin/corporate-club-sss-basvuru/index.html",
    "uniqueId": "Bavuru",
    "seoUrl": "tcc-application-questions",
    "metadata": null
  },
  {
    "topicName": "TCC Membership",
    "topicTranslation": "Üyelik",
    "sectionName": "7 CORPORATE CLUB",
    "sectionTranslation": "CORPORATE CLUB",
    "tcmID": "tcm:92-135526-16",
    "linkUri": "/tr-tr/bilgi-edin/corporate-club-sss-uyelik/index.html",
    "uniqueId": "yelik",
    "seoUrl": "tcc-membership-questions",
    "metadata": null
  }
];

async function importCorporateClubTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create CORPORATE CLUB section
    console.log('🔍 Looking for CORPORATE CLUB section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: '7 CORPORATE CLUB',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating CORPORATE CLUB section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: '7 CORPORATE CLUB',
          sectionTranslation: 'CORPORATE CLUB',
          order: 0,
          publishedAt: new Date(),
        },
        locale: locale,
      });
      console.log('✅ CORPORATE CLUB section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing CORPORATE CLUB section with ID:', section.id);
    }

    // 2. Import topics
    console.log(`\n📦 Importing ${topics.length} topics...`);
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const topicData of topics) {
      try {
        // Check if topic already exists by uniqueId
        const existingTopic = await app.entityService.findMany('api::faq-topic.faq-topic', {
          locale: locale,
          filters: {
            uniqueId: topicData.uniqueId,
          },
          limit: 1,
        });

        if (existingTopic && existingTopic.length > 0) {
          console.log(`⏭️  Skipping "${topicData.topicTranslation}" - already exists`);
          skipCount++;
          continue;
        }

        // Create topic
        const topic = await app.entityService.create('api::faq-topic.faq-topic', {
          data: {
            topicName: topicData.topicName,
            topicTranslation: topicData.topicTranslation,
            section: section.id,
            tcmID: topicData.tcmID,
            linkUri: topicData.linkUri,
            uniqueId: topicData.uniqueId,
            seoUrl: topicData.seoUrl,
            metadata: topicData.metadata,
            order: 0,
            publishedAt: new Date(),
          },
          locale: locale,
        });

        console.log(`✅ Created: "${topicData.topicTranslation}" (ID: ${topic.id})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error creating "${topicData.topicTranslation}":`, error.message);
        errorCount++;
      }
    }

    // 3. Summary
    console.log('\n📊 Import Summary:');
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ⏭️  Skipped: ${skipCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📦 Total: ${topics.length}`);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    throw error;
  }
}

// Run the import
async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  let app;

  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';

    // Make strapi available globally for entityService
    global.strapi = app;

    await importCorporateClubTopics(app);
    await app.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    if (app) {
      await app.destroy();
    }
    process.exit(1);
  }
}

main();

