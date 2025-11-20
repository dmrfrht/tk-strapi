/**
 * Import ADDITIONAL SERVICES section topics to Strapi
 * 
 * Usage: node scripts/import-additional-services-topics.js
 */

const topics = [
  {
    "topicName": "Business upgrade",
    "topicTranslation": "Kabin yükseltme",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-267799-16",
    "linkUri": "/tr-tr/bilgi-edin/business-upgrade-sorulari/index.html",
    "uniqueId": "Kabinykseltme",
    "seoUrl": "business-upgrade-sorulari",
    "metadata": {
      "title": "Business Upgrade (Kabin Yükseltme) Hakkında Sorular | Türk Hava Yolları ®",
      "keywords": [
        "Kabin yükseltme",
        "business class yükseltme",
        "thy upgrade",
        "thy kabin yükseltme"
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
      "description": "Business upgrade işlemleri hakkında detaylı bilgi almak ve kabin yükseltme seçeneklerini öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Car rental",
    "topicTranslation": "Araç kiralama",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-257282-16",
    "linkUri": "/tr-tr/bilgi-edin/arac-kiralama-sorulari/index.html",
    "uniqueId": "Arakiralama",
    "seoUrl": "arac-kiralama-sorulari",
    "metadata": {
      "title": "Araç Kiralama İşlemleri ve Sıkça Sorulan Sorular | Türk Hava Yolları ®",
      "keywords": [
        "araç kiralama",
        "araç kiralama bilgileri",
        "türk hava yolları",
        "sss"
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
      "description": "Araç kiralama süreçleri ve kuralları hakkında detaylı bilgi almak ve seyahatinizi kolaylaştırmak için sayfamızı ziyaret edin.",
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
    "topicName": "E-Visa",
    "topicTranslation": "E-Vize",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-257283-16",
    "linkUri": "/tr-tr/bilgi-edin/e-vize-sorulari/index.html",
    "uniqueId": "EVize",
    "seoUrl": "e-vize-sorulari",
    "metadata": {
      "title": "E-vize Soruları | Türk Hava Yolları ®",
      "keywords": [
        "evize",
        "evize bilgileri",
        "türk hava yolları",
        "sss"
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
      "description": "E-vize işlemleri hakkında sıkça sorulan sorulara yanıt almak ve seyahatinizi kolaylaştırmak için sayfamızı ziyaret edin.",
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
    "topicName": "Extra legroom seat",
    "topicTranslation": "Ekstra diz mesafeli koltuk",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-257280-16",
    "linkUri": "/tr-tr/bilgi-edin/ekstra-diz-mesafeli-koltuk-sorulari/index.html",
    "uniqueId": "Ekstradizmesafelikoltuk",
    "seoUrl": "ekstra-diz-mesafeli-koltuk-sorulari",
    "metadata": {
      "title": "Ekstra Diz Mesafeli Koltuklar Hakkında Sorular | Türk Hava Yolları ®",
      "keywords": [
        "ekstra diz mesafeli koltuk",
        "ekstra diz mesafeli koltuk bilgileri",
        "türk hava yolları",
        "sss"
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
      "description": "Ekstra diz mesafeli koltuklar hakkında detaylı bilgi almak ve rezervasyon yapmak için sayfamızı ziyaret edin.",
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
    "topicName": "Hotel",
    "topicTranslation": "Otel",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-257281-16",
    "linkUri": "/tr-tr/bilgi-edin/otel-sorulari/index.html",
    "uniqueId": "Otel",
    "seoUrl": "otel-sorulari",
    "metadata": {
      "title": "Otel Rezervasyonu Soruları | Türk Hava Yolları ®",
      "keywords": [
        "otel",
        "otel bilgileri",
        "türk hava yolları",
        "sss"
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
      "description": "Otel rezervasyonlarıyla ilgili sıkça sorulan sorulara yanıt almak ve sürecinizi kolaylaştırmak için sayfamızı ziyaret edin.",
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
    "topicName": "Seat features",
    "topicTranslation": "Koltuk özellikleri",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-23861-16",
    "linkUri": "/tr-tr/bilgi-edin/koltuk-ozellikleri-sorulari/index.html",
    "uniqueId": "Koltukzellikleri",
    "seoUrl": "koltuk-ozellikleri-sorulari",
    "metadata": {
      "title": "Koltuk Özellikleri Soruları | Türk Hava Yolları ®",
      "keywords": [
        "premium economy seats",
        "details",
        "availibility",
        "discounts",
        "dimensions",
        "Compare Seat Options",
        "seats for business",
        "seats for economy",
        "cabin",
        "business class",
        "economy class",
        "luxurious busines flights feature",
        "luxurious economy flights feature"
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
      "description": "Koltuk özellikleri hakkında detaylı bilgi almak ve seyahatinizi konforlu hale getirmek için sayfamızı ziyaret edin.",
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
    "topicName": "Seat selection",
    "topicTranslation": "Koltuk seçimi",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-376582-16",
    "linkUri": "/tr-tr/bilgi-edin/koltuk-secimi-sorulari/index.html",
    "uniqueId": "Koltukseimi",
    "seoUrl": "koltuk-secimi-sorulari",
    "metadata": {
      "title": "Koltuk Seçimi Soruları | Türk Hava Yolları ®",
      "keywords": [
        "Seat selection faq information",
        "Seat selection",
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
      "description": "Koltuk seçimiyle ilgili sıkça sorulan sorulara yanıt almak ve tercihlerinizi kolaylaştırmak için sayfamızı ziyaret edin.",
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
    "topicName": "Travel insurance",
    "topicTranslation": "Seyahat sigortası",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-22658-16",
    "linkUri": "/tr-tr/bilgi-edin/seyahat-sigortasi-sorulari/index.html",
    "uniqueId": "Seyahatsigortas",
    "seoUrl": "seyahat-sigortasi-sorulari",
    "metadata": {
      "title": "Seyahat Sigortası Sorular | SSS ",
      "keywords": [
        "uçuşta seyahat sigortası",
        "uçuş seyahat sigortası",
        "thy seyahat sigortası",
        "thy sık sorulan sorular",
        "thy ikram servisi",
        "turk hava yolları"
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
      "description": "Seyahat sigortası hakkında sık sorulan sorulara ve cevaplarına bu sayfadan ulaşabilirsiniz.",
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
    "topicName": "Turkish Airlines Gift Card",
    "topicTranslation": "Türk Hava Yolları hediye kartı",
    "sectionName": "9 ADDITIONAL SERVICES",
    "sectionTranslation": "EK HİZMETLER",
    "tcmID": "tcm:92-360698-16",
    "linkUri": "/tr-tr/bilgi-edin/turkish-airlines-hediye-kart-sorulari/index.html",
    "uniqueId": "TrkHavaYollarhediyekart",
    "seoUrl": "turkish-airlines-hediye-kart-sorulari",
    "metadata": {
      "title": "Türk Hava Yolları hediye kartı Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "Türk Hava Yolları Hediye Kart "
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
      "description": "Türk Hava Yolları hediye kartı hakkında bu sayfadan detaylı bilgi alabilir ve sıkça sorulan sorulara ulaşabilirsiniz.",
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

async function importAdditionalServicesTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create ADDITIONAL SERVICES section
    console.log('🔍 Looking for ADDITIONAL SERVICES section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: '9 ADDITIONAL SERVICES',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating ADDITIONAL SERVICES section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: '9 ADDITIONAL SERVICES',
          sectionTranslation: 'EK HİZMETLER',
          order: 0,
          publishedAt: new Date(),
        },
        locale: locale,
      });
      console.log('✅ ADDITIONAL SERVICES section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing ADDITIONAL SERVICES section with ID:', section.id);
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

    await importAdditionalServicesTopics(app);
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

