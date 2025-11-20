/**
 * Import MILES&SMILES section topics to Strapi
 * 
 * Usage: node scripts/import-miles-smiles-topics.js
 */

const topics = [
  {
    "topicName": "Award Ticket",
    "topicTranslation": "Ödül bilet",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-375901-16",
    "linkUri": "/tr-tr/bilgi-edin/odul-bilet-sorulari/index.html",
    "uniqueId": "dlbilet",
    "seoUrl": "odul-bilet-sorulari",
    "metadata": {
      "title": "Ödül Bilet Soruları | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Award Ticket"
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
      "description": "Ödül bilet kullanımıyla ilgili sıkça sorulan sorulara yanıt almak ve avantajları öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Codeshare (Partner) Airlines",
    "topicTranslation": "Partner havayolları",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-375630-16",
    "linkUri": "/tr-tr/bilgi-edin/partner-havayollari-sorulari/index.html",
    "uniqueId": "Partnerhavayollar",
    "seoUrl": "partner-havayollari-sorulari",
    "metadata": {
      "title": "Partner Havayolları Soruları | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Partner Havayolları"
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
      "description": "Partner havayolları hakkında detaylı bilgi almak ve ortak uçuş avantajlarını öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Earning Miles",
    "topicTranslation": "Mil kazanma",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-376085-16",
    "linkUri": "/tr-tr/bilgi-edin/mil-kazanma-sorulari/index.html",
    "uniqueId": "Milkazanma",
    "seoUrl": "mil-kazanma-sorulari",
    "metadata": {
      "title": "Mil Kazanma Soruları | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Mil Kazanma"
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
      "description": "Uçuşlarınızdan mil kazanma süreçleri hakkında detaylı bilgi almak ve avantajları öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Membership procedures",
    "topicTranslation": "Üyelik işlemleri",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-376106-16",
    "linkUri": "/tr-tr/bilgi-edin/uyelik-islemleri-sorulari/index.html",
    "uniqueId": "yelikilemleri",
    "seoUrl": "uyelik-islemleri-sorulari",
    "metadata": {
      "title": "Üyelik İşlemleri Soruları | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Üyelik İşlemleri"
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
      "description": "Üyelik işlemleriyle ilgili sıkça sorulan sorulara yanıt almak ve detaylı bilgi edinmek için sayfamızı ziyaret edin.",
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
    "topicName": "Membership Statuses and Privileges",
    "topicTranslation": "Üyelik statüleri ve ayrıcalıklar",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-375885-16",
    "linkUri": "/tr-tr/bilgi-edin/uyelik-statuleri-ve-ayrcaliklar-sorulari/index.html",
    "uniqueId": "yelikstatleriveayrcalklar",
    "seoUrl": "uyelik-statuleri-ve-ayrcaliklar-sorulari",
    "metadata": {
      "title": "Üyelik Statüleri ve Ayrıcalıklar | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Üyelik Statüleri ve Ayrcalıklar"
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
      "description": "Üyelik statüleri ve ayrıcalıkları hakkında detaylı bilgi almak ve avantajları öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Miles&Smiles Credit Card",
    "topicTranslation": "Miles&Smiles kredi kartı",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-375806-16",
    "linkUri": "/tr-tr/bilgi-edin/miles-and-smiles-kredi-karti-sorulari/index.html",
    "uniqueId": "MilesSmileskredikart",
    "seoUrl": "miles-and-smiles-kredi-karti-sorulari",
    "metadata": {
      "title": "Miles&Smiles Kredi Kartı Soruları | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Miles&Smiles Kredi Kartı"
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
      "description": "Miles&Smiles kredi kartı hakkında detaylı bilgi almak ve avantajları öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Non-Air Partners",
    "topicTranslation": "Uçuş dışı partnerler",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-375667-16",
    "linkUri": "/tr-tr/bilgi-edin/ucus-disi-partnerler-sorulari/index.html",
    "uniqueId": "Uudpartnerler",
    "seoUrl": "ucus-disi-partnerler-sorulari",
    "metadata": {
      "title": "Uçuş Dışı Partnerler Soruları | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Uçuş Dışı Partnerler"
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
      "description": "Uçuş dışı partnerlerle ilgili sıkça sorulan sorulara yanıt almak ve iş birliklerini öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Program Applications",
    "topicTranslation": "Program uygulamaları",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-375854-16",
    "linkUri": "/tr-tr/bilgi-edin/program-uygulamalari-sorulari/index.html",
    "uniqueId": "Programuygulamalar",
    "seoUrl": "program-uygulamalari-sorulari",
    "metadata": {
      "title": "Program Uygulamaları Soruları | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Program Uygulamaları"
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
      "description": "Program uygulamalarıyla ilgili sıkça sorulan sorulara yanıt almak ve kolayca bilgi edinmek için sayfamızı ziyaret edin.",
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
    "topicName": "Spending Miles",
    "topicTranslation": "Mil harcama",
    "sectionName": "5 MILES&SMILES",
    "sectionTranslation": "MILES&SMILES",
    "tcmID": "tcm:92-376027-16",
    "linkUri": "/tr-tr/bilgi-edin/mil-harcama-sorulari/index.html",
    "uniqueId": "Milharcama",
    "seoUrl": "mil-harcama-sorulari",
    "metadata": {
      "title": "Mil Harcama | Türk Hava Yolları ®",
      "keywords": [
        "miles and smiles",
        "thy",
        "turkish airlines",
        "Mil Harcama "
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
      "description": "Mil Harcama | Miles&Smiles Sıkça sorulan sorular",
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

async function importMilesSmilesTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create MILES&SMILES section
    console.log('🔍 Looking for MILES&SMILES section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: '5 MILES&SMILES',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating MILES&SMILES section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: '5 MILES&SMILES',
          sectionTranslation: 'MILES&SMILES',
          order: 0,
          publishedAt: new Date(),
        },
        locale: locale,
      });
      console.log('✅ MILES&SMILES section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing MILES&SMILES section with ID:', section.id);
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

    await importMilesSmilesTopics(app);
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

