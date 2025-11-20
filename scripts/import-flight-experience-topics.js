/**
 * Import FLIGHT EXPERIENCE section topics to Strapi
 * 
 * Usage: node scripts/import-flight-experience-topics.js
 */

const topics = [
  {
    "topicName": "As You Wish",
    "topicTranslation": "As You Wish",
    "sectionName": "FLIGHT EXPERIENCE",
    "sectionTranslation": "UÇUŞ DENEYİMİ",
    "tcmID": "tcm:92-366105-16",
    "linkUri": "/tr-tr/bilgi-edin/as-you-wish-sorulari/index.html",
    "uniqueId": "AsYouWish",
    "seoUrl": "as-you-wish-sorulari",
    "metadata": {
      "title": "AsYouWish | FAQ | Türk Hava Yolları ®",
      "keywords": [
        "asyouwish"
      ],
      "robots": [
        {
          "robotsvalue": "noindex",
          "id": null
        },
        {
          "robotsvalue": "nofollow",
          "id": null
        }
      ],
      "description": "AsYouWish uygulaması hakkında detaylı bilgi almak için sık sorulan soruları ve cevaplarını inceleyin. ",
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
    "topicName": "Boarding pass privileges",
    "topicTranslation": "Biniş kartı ayrıcalıkları",
    "sectionName": "FLIGHT EXPERIENCE",
    "sectionTranslation": "UÇUŞ DENEYİMİ",
    "tcmID": "tcm:92-376611-16",
    "linkUri": "/tr-tr/bilgi-edin/binis-karti-ayricaliklari-sorulari/index.html",
    "uniqueId": "Binikartayrcalklar",
    "seoUrl": "binis-karti-ayricaliklari-sorulari",
    "metadata": {
      "title": "Biniş Kartı Ayrıcalıkları ile İlgili Sorular | Türk Hava Yolları ®",
      "keywords": [
        "Boarding pass privileges faq information",
        "Boarding pass privileges",
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
      "description": "Biniş kartı ayrıcalıklarıyla ilgili sıkça sorulan sorulara yanıt almak ve yolculuğunuzu kolaylaştırmak için sayfamızı ziyaret edin.",
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
    "topicName": "Dining Onboard",
    "topicTranslation": "Uçak içi ikram",
    "sectionName": "FLIGHT EXPERIENCE",
    "sectionTranslation": "UÇUŞ DENEYİMİ",
    "tcmID": "tcm:92-359758-16",
    "linkUri": "/tr-tr/bilgi-edin/ucak-ici-ikram-sorulari/index.html",
    "uniqueId": "Uakiiikram",
    "seoUrl": "ucak-ici-ikram-sorulari",
    "metadata": {
      "title": "Uçak İçi İkram Soruları | Türk Hava Yolları ®",
      "keywords": [
        "uçak içi ikram",
        "sıkça sorulan sorular",
        "türk hava yolları",
        "info",
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
      "description": "Uçak içi ikram hakkında sıkça sorulan sorulara yanıt almak ve hizmet detaylarını öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Inflight entertainment",
    "topicTranslation": "Uçak içi eğlence",
    "sectionName": "FLIGHT EXPERIENCE",
    "sectionTranslation": "UÇUŞ DENEYİMİ",
    "tcmID": "tcm:92-23864-16",
    "linkUri": "/tr-tr/bilgi-edin/ucak-ici-eglence-sorulari/index.html",
    "uniqueId": "Uakiielence",
    "seoUrl": "ucak-ici-eglence-sorulari",
    "metadata": {
      "title": "Uçak İçi Eğlence Soruları | Türk Hava Yolları ®",
      "keywords": [
        "inflight entertainment",
        "miles&smiles",
        "turkish airlines",
        "thy"
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
      "description": "Uçak içi eğlence sistemleri hakkında sıkça sorulan sorulara yanıt almak ve seçenekleri öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "In-flight Wifi",
    "topicTranslation": "Uçak içi bağlanabilirlik",
    "sectionName": "FLIGHT EXPERIENCE",
    "sectionTranslation": "UÇUŞ DENEYİMİ",
    "tcmID": "tcm:92-376610-16",
    "linkUri": "/tr-tr/bilgi-edin/ucak-ici-baglanabilirlik-sorulari/index.html",
    "uniqueId": "Uakiibalanabilirlik",
    "seoUrl": "ucak-ici-baglanabilirlik-sorulari",
    "metadata": {
      "title": "Uçak İçi Bağlanabilirlik Soruları | Türk Hava Yolları ®",
      "keywords": [
        "In-flight Wifi faq information",
        "In-flight Wifi",
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
      "description": "Uçak içi internet ve bağlantı hizmetleri hakkında sıkça sorulan sorulara yanıt almak için sayfamızı ziyaret edin.",
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
    "topicName": "PressReader",
    "topicTranslation": "PressReader",
    "sectionName": "FLIGHT EXPERIENCE",
    "sectionTranslation": "UÇUŞ DENEYİMİ",
    "tcmID": "tcm:92-222560-16",
    "linkUri": "/tr-tr/bilgi-edin/pressreader/index.html",
    "uniqueId": "PressReader",
    "seoUrl": "pressreader",
    "metadata": {
      "title": "PressReader Nedir? | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "pressreader app",
        "pressreader mobil",
        "pressreader uygulaması",
        "gazete dergi uygulaması"
      ],
      "robots": [
        {
          "robotsvalue": "noindex",
          "id": null
        },
        {
          "robotsvalue": "nofollow",
          "id": null
        }
      ],
      "description": "Akıllı telefon ve tabletler üzerinden gazete ve dergilere sınırsız erişim sunan PressReader hakkında detaylı bilgilere ulaşın.",
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
    "topicName": "Special meals",
    "topicTranslation": "Özel yemek",
    "sectionName": "FLIGHT EXPERIENCE",
    "sectionTranslation": "UÇUŞ DENEYİMİ",
    "tcmID": "tcm:92-22710-16",
    "linkUri": "/tr-tr/bilgi-edin/ozel-yemek-servisi-sorulari/index.html",
    "uniqueId": "zelyemek",
    "seoUrl": "ozel-yemek-servisi-sorulari",
    "metadata": {
      "title": "Özel Yemek Servisi Soruları | Türk Hava Yolları ®",
      "keywords": [
        "uçuşta yemek talebi",
        "uçuşta yemek servisi",
        "thy yemek servisi",
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
      "description": "Özel yemek servisiyle ilgili sıkça sorulan sorulara yanıt almak ve seyahatinizi kişiselleştirmek için sayfamızı ziyaret edin.",
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
    "topicName": "Turkish Airlines Lounges",
    "topicTranslation": "Turkish Airlines Lounges",
    "sectionName": "FLIGHT EXPERIENCE",
    "sectionTranslation": "UÇUŞ DENEYİMİ",
    "tcmID": "tcm:92-360697-16",
    "linkUri": "/tr-tr/bilgi-edin/turkish-airlines-lounges-sorulari/index.html",
    "uniqueId": "TurkishAirlinesLounges",
    "seoUrl": "turkish-airlines-lounges-sorulari",
    "metadata": {
      "title": "Turkish Airlines Lounges | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "Turkish Airlines Lounges"
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
      "description": "Turkish Airlines Lounges hakkında bu sayfadan bilgi alabilirsiniz.",
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

async function importFlightExperienceTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create FLIGHT EXPERIENCE section
    console.log('🔍 Looking for FLIGHT EXPERIENCE section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: 'FLIGHT EXPERIENCE',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating FLIGHT EXPERIENCE section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: 'FLIGHT EXPERIENCE',
          sectionTranslation: 'UÇUŞ DENEYİMİ',
          order: 0,
          publishedAt: new Date(),
        },
        locale: locale,
      });
      console.log('✅ FLIGHT EXPERIENCE section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing FLIGHT EXPERIENCE section with ID:', section.id);
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

    await importFlightExperienceTopics(app);
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

