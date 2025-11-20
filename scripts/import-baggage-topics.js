/**
 * Import BAGGAGE section topics to Strapi
 * 
 * Usage: node scripts/import-baggage-topics.js
 */

const topics = [
  {
    "topicName": "Cabin baggage",
    "topicTranslation": "Kabin bagajı",
    "sectionName": "BAGGAGE",
    "sectionTranslation": "BAGAJ",
    "tcmID": "tcm:92-22659-16",
    "linkUri": "/tr-tr/bilgi-edin/kabin-bagaji-sorulari/index.html",
    "uniqueId": "Kabinbagaj",
    "seoUrl": "kabin-bagaji-sorulari",
    "metadata": {
      "title": "Kabin Bagajı Soruları | Türk Hava Yolları ®",
      "keywords": [
        "bagaj soruları",
        "bagaj hakkı",
        "bagaj bilgileri",
        "kabin bagajı taşıma",
        "uçuşlarda kabin bagajı"
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
      "description": "Kabin bagajı hakkında sıkça sorulan sorulara yanıt almak ve uçuş öncesi hazırlığınızı yapmak için sayfamızı ziyaret edin.",
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
    "topicName": "Free baggage",
    "topicTranslation": "Uçak altı bagaj",
    "sectionName": "BAGGAGE",
    "sectionTranslation": "BAGAJ",
    "tcmID": "tcm:92-22661-16",
    "linkUri": "/tr-tr/bilgi-edin/bagaj-sorulari/index.html",
    "uniqueId": "Uakaltbagaj",
    "seoUrl": "bagaj-sorulari",
    "metadata": {
      "title": "Uçak altı bagaj soruları | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "baggage faq information",
        "baggage allowance faq information",
        "luggage entitlement faq information",
        "free baggage faq information",
        "turkish airlines baggage allowance faq information",
        "baggage charges faq information",
        "baggage rules faq information",
        "turkish airlines faq information",
        "thy faq information",
        "turk hava yollari"
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
      "description": "Uçak altı bagaj hakkında sık sorulan sorulara ve seyahatinizde size yardımcı olacak cevaplara göz atın.",
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
    "topicName": "Excess baggage",
    "topicTranslation": "Ekstra bagaj/Bagaja ağırlık ekleme",
    "sectionName": "BAGGAGE",
    "sectionTranslation": "BAGAJ",
    "tcmID": "tcm:92-22681-16",
    "linkUri": "/tr-tr/bilgi-edin/ekstra-bagaj-sorulari/index.html",
    "uniqueId": "EkstrabagajBagajaarlkekleme",
    "seoUrl": "ekstra-bagaj-sorulari",
    "metadata": {
      "title": "Ekstra Bagaj ve Ağırlık Ekleme Soruları | Türk Hava Yolları ®",
      "keywords": [
        "bagaj soruları",
        "bagaj hakkı",
        "bagaj bilgileri",
        "Ekstra bagaj taşıma",
        "uçuşlarda Ekstra bagaj"
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
      "description": "Ekstra bagaj işlemleriyle ilgili sıkça sorulan sorulara yanıt almak için sayfamızı ziyaret edin.",
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
    "topicName": "Lost and delayed baggage",
    "topicTranslation": "Geciken, hasarlı, geç teslim edilen bagaj",
    "sectionName": "BAGGAGE",
    "sectionTranslation": "BAGAJ",
    "tcmID": "tcm:92-22715-16",
    "linkUri": "/tr-tr/bilgi-edin/kayip-hasarli-gec-teslim-edilen-bagaj-sorulari/index.html",
    "uniqueId": "Gecikenhasarlgeteslimedilenbagaj",
    "seoUrl": "kayip-hasarli-gec-teslim-edilen-bagaj-sorulari",
    "metadata": {
      "title": "Hasarlı ve Geç Teslim Edilen Bagaj Soruları | Türk Hava Yolları ®",
      "keywords": [
        "kayıp bagaj",
        "hasarlı bagaj",
        "eksik bagaj",
        "geç teslim edilen bagaj",
        "türk hava yolları"
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
      "description": "Kayıp, hasarlı veya geç teslim edilen bagaj işlemleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.",
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
    "topicName": "Restrictions",
    "topicTranslation": "Kısıtlamalar",
    "sectionName": "BAGGAGE",
    "sectionTranslation": "BAGAJ",
    "tcmID": "tcm:92-22704-16",
    "linkUri": "/tr-tr/bilgi-edin/kisitlamalar-sorulari/index.html",
    "uniqueId": "Kstlamalar",
    "seoUrl": "kisitlamalar-sorulari",
    "metadata": {
      "title": "Kısıtlamalar Soruları | Türk Hava Yolları ®",
      "keywords": [
        "bagaj kısıtlamaları",
        "yasaklı maddeler",
        "uçakta taşınamayan maddeler",
        "thy sık sorulan sorular",
        "thy ikram servisi",
        "turk hava yollari"
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
      "description": "Bagaj ve seyahat kısıtlamalarıyla ilgili sıkça sorulan sorulara yanıt almak için sayfamızı ziyaret edin.",
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
    "topicName": "US baggage rules",
    "topicTranslation": "ABD serbest bagaj kuralları",
    "sectionName": "BAGGAGE",
    "sectionTranslation": "BAGAJ",
    "tcmID": "tcm:92-22707-16",
    "linkUri": "/tr-tr/bilgi-edin/abd-bagaj-kurallari-sorulari/index.html",
    "uniqueId": "ABDserbestbagajkurallar",
    "seoUrl": "abd-bagaj-kurallari-sorulari",
    "metadata": {
      "title": "ABD serbest bagaj kuralları soruları | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "baggage regulations faq information",
        "American baggage regulations faq information",
        "us baggage regulations faq information",
        "usa baggage regulations faq information",
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
      "description": "ABD serbest bagaj kuralları hakkında sık sorulan sorulara ve seyahatinizde size yardımcı olacak cevaplara göz atın.",
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

async function importBaggageTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create BAGGAGE section
    console.log('🔍 Looking for BAGGAGE section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: 'BAGGAGE',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating BAGGAGE section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: 'BAGGAGE',
          sectionTranslation: 'BAGAJ',
          order: 0,
        },
        locale: locale,
      });
      console.log('✅ BAGGAGE section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing BAGGAGE section with ID:', section.id);
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

    await importBaggageTopics(app);
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

