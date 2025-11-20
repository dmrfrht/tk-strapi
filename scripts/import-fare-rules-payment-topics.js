/**
 * Import FARE RULES and PAYMENT section topics to Strapi
 * 
 * Usage: node scripts/import-fare-rules-payment-topics.js
 */

const topics = [
  {
    "topicName": "Fare rules",
    "topicTranslation": "Ücret kuralları",
    "sectionName": "FARE RULES and PAYMENT",
    "sectionTranslation": "ÜCRET KURALLARI VE ÖDEME",
    "tcmID": "tcm:92-22705-16",
    "linkUri": "/tr-tr/bilgi-edin/ucret-kosullari-sorulari/index.html",
    "uniqueId": "cretkurallar",
    "seoUrl": "ucret-kosullari-sorulari",
    "metadata": {
      "title": "Ücret Koşulları Soruları | Türk Hava Yolları ®",
      "keywords": [
        "turkishairlines.com faq information",
        "fares faq information",
        "fare rules faq information",
        "air ticket prices faq information",
        "airfares faq information",
        "discount flight tickets faq information",
        "discount fares faq information",
        "thy faq information",
        "turk hava yollari faq information",
        "turkish airlines"
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
      "description": "Ücret koşullarıyla ilgili sıkça sorulan sorulara yanıt almak ve hazırlık yapmak için sayfamızı ziyaret edin.",
      "parameters": [
        {
          "key": "p:domain_verify",
          "value": "0521feda9bcfa9c254762a3ddd69e41f",
          "id": null
        }
      ],
      "pubId": null
    }
  },
  {
    "topicName": "Payment",
    "topicTranslation": "Ödeme",
    "sectionName": "FARE RULES and PAYMENT",
    "sectionTranslation": "ÜCRET KURALLARI VE ÖDEME",
    "tcmID": "tcm:92-244144-16",
    "linkUri": "/tr-tr/bilgi-edin/odeme-sorulari/index.html",
    "uniqueId": "deme",
    "seoUrl": "odeme-sorulari",
    "metadata": {
      "title": "Ödeme Soruları | Türk Hava Yolları ®",
      "keywords": [
        "payment",
        "sorular",
        "türk hava yolları",
        "faq"
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
      "description": "Ödeme işlemleriyle ilgili sıkça sorulan sorulara yanıt almak ve sürecinizi kolaylaştırmak için sayfamızı ziyaret edin.",
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

async function importFareRulesPaymentTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create FARE RULES and PAYMENT section
    console.log('🔍 Looking for FARE RULES and PAYMENT section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: 'FARE RULES and PAYMENT',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating FARE RULES and PAYMENT section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: 'FARE RULES and PAYMENT',
          sectionTranslation: 'ÜCRET KURALLARI VE ÖDEME',
          order: 0,
          publishedAt: new Date(),
        },
        locale: locale,
      });
      console.log('✅ FARE RULES and PAYMENT section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing FARE RULES and PAYMENT section with ID:', section.id);
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

    await importFareRulesPaymentTopics(app);
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

