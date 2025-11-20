/**
 * Import PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS section topics to Strapi
 * 
 * Usage: node scripts/import-pets-music-sports-topics.js
 */

const topics = [
  {
    "topicName": "Musical instruments",
    "topicTranslation": "Müzik ekipmanları",
    "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
    "sectionTranslation": "EVCİL HAYVANLAR, MÜZİK ALETLERİ VE SPOR EKİPMANLARI",
    "tcmID": "tcm:92-22703-16",
    "linkUri": "/tr-tr/bilgi-edin/muzik-ekipmanlari-sorulari/index.html",
    "uniqueId": "Mzikekipmanlar",
    "seoUrl": "muzik-ekipmanlari-sorulari",
    "metadata": {
      "title": "Müzik Ekipmanları Soruları | Türk Hava Yolları ®",
      "keywords": [
        "musical instruments faq information",
        "music gear faq information",
        "musical equipment faq information",
        "musical items faq information",
        "carrying large baggage faq information",
        "baggage charges faq information",
        "thy faq information",
        "turk hava yollari faq information",
        "turkishairlines.com faq information",
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
      "description": "Müzik ekipmanlarıyla ilgili sıkça sorulan sorulara yanıt almak için sayfamızı ziyaret edin.",
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
    "topicName": "Sports equipment",
    "topicTranslation": "Spor ekipmanları",
    "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
    "sectionTranslation": "EVCİL HAYVANLAR, MÜZİK ALETLERİ VE SPOR EKİPMANLARI",
    "tcmID": "tcm:92-22682-16",
    "linkUri": "/tr-tr/bilgi-edin/spor-ekipmanlari-sorulari/index.html",
    "uniqueId": "Sporekipmanlar",
    "seoUrl": "spor-ekipmanlari-sorulari",
    "metadata": {
      "title": "Spor Ekipmanları Soruları | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "sports equipment faq information",
        "sports gear faq information",
        "sporting equipment faq information",
        "sports items faq information",
        "carrying large baggage faq information",
        "baggage charges faq information",
        "thy faq information",
        "turk hava yollari faq information",
        "turkishairlines.com faq information",
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
      "description": "Spor ekipmanlarının taşınması hakkında sık sorulan sorulara ve seyahatinizde size yardımcı olacak cevaplara göz atın.",
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
    "topicName": "Traveling with pets",
    "topicTranslation": "Evcil hayvanlarla seyahat",
    "sectionName": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS",
    "sectionTranslation": "EVCİL HAYVANLAR, MÜZİK ALETLERİ VE SPOR EKİPMANLARI",
    "tcmID": "tcm:92-22714-16",
    "linkUri": "/tr-tr/bilgi-edin/evcil-hayvanlarla-yolculuk-sorular/index.html",
    "uniqueId": "Evcilhayvanlarlaseyahat",
    "seoUrl": "evcil-hayvanlarla-yolculuk-sorular",
    "metadata": {
      "title": "Evcil Hayvanlarla Yolculuk Soruları | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "pets faq information",
        "carriage of pets faq information",
        "flying with pets faq information",
        "traveling with pets faq information",
        "taking pets on flights faq information",
        "thy faq information",
        "turkish airlines faq information",
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
      "description": "Evcil hayvanlarla yolculuk hakkında sık sorulan sorulara ve seyahatinizde size yardımcı olacak cevaplara göz atın.",
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

async function importPetsMusicSportsTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS section
    console.log('🔍 Looking for PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: 'PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: 'PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS',
          sectionTranslation: 'EVCİL HAYVANLAR, MÜZİK ALETLERİ VE SPOR EKİPMANLARI',
          order: 0,
          publishedAt: new Date(),
        },
        locale: locale,
      });
      console.log('✅ PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS section with ID:', section.id);
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

    await importPetsMusicSportsTopics(app);
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

