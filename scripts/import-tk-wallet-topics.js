/**
 * Import TK WALLET section topics to Strapi
 * 
 * Usage: node scripts/import-tk-wallet-topics.js
 */

const topics = [
  {
    "topicName": "TK Wallet",
    "topicTranslation": "TK Cüzdan",
    "sectionName": "TK WALLET",
    "sectionTranslation": "TK CÜZDAN",
    "tcmID": "tcm:92-377660-16",
    "linkUri": "/tr-tr/bilgi-edin/tk-cuzdan-sorulari/index.html",
    "uniqueId": "TKCzdan",
    "seoUrl": "tk-cuzdan-sorulari",
    "metadata": {
      "title": "TK Cüzdan Soruları | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "TK Cüzdan",
        "thy faq information",
        "turkish airlines faq information",
        "turkishairlines.com"
      ],
      "robots": [
        {
          "robotsvalue": "index",
          "id": null
        },
        {
          "robotsvalue": "follow",
          "id": null
        }
      ],
      "description": "TK Cüzdan hakkında sık sorulan sorulara ve seyahatinizde size yardımcı olacak cevaplara göz atın.",
      "parameters": [
        {
          "key": "p:domain_verify",
          "value": "0521feda9bcfa9c254762a3ddd69e41f",
          "id": null
        }
      ],
      "pubId": null
    }
  }
];

async function importTkWalletTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create TK WALLET section
    console.log('🔍 Looking for TK WALLET section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: 'TK WALLET',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating TK WALLET section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: 'TK WALLET',
          sectionTranslation: 'TK CÜZDAN',
          order: 0,
          publishedAt: new Date(),
        },
        locale: locale,
      });
      console.log('✅ TK WALLET section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing TK WALLET section with ID:', section.id);
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

    global.strapi = app;

    await importTkWalletTopics(app);
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

