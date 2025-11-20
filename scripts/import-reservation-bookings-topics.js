/**
 * Import RESERVATION and BOOKINGS section topics to Strapi
 * 
 * Usage: node scripts/import-reservation-bookings-topics.js
 */

const topics = [
  {
    "topicName": "Reservations and bookings",
    "topicTranslation": "Biletleme",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-22656-16",
    "linkUri": "/tr-tr/bilgi-edin/rezervasyon-biletleme-sorulari/index.html",
    "uniqueId": "Biletleme",
    "seoUrl": "rezervasyon-biletleme-sorulari",
    "metadata": {
      "title": "Biletleme Soruları | Türk Hava Yolları ®",
      "keywords": [
        "flight tickets faq information",
        "search flight tickets faq information",
        "better flight tickets faq information",
        "best flight tickets faq information",
        "best airlines faq information",
        "thy faq information",
        "turkish airlines faq information",
        "bookings and tickets faq information",
        "bookings faq information",
        "tickets"
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
      "description": "Rezervasyon ve biletleme işlemleriyle ilgili sıkça sorulan sorulara yanıt almak için sayfamızı ziyaret edin.",
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
    "topicName": "Check-in",
    "topicTranslation": "Check-in",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-22660-16",
    "linkUri": "/tr-tr/bilgi-edin/check-in-sorular/index.html",
    "uniqueId": "Checkin",
    "seoUrl": "check-in-sorular",
    "metadata": {
      "title": "Check-in İşlemleri Hakkında Sıkça Sorulan Sorular | Türk Hava Yolları ®",
      "keywords": [
        "check in soruları",
        "check-in bilgileri",
        "turk hava yollari "
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
      "description": "Check-in işlemleriyle ilgili sıkça sorulan sorulara yanıt almak ve sorunsuz işlem yapmak için sayfamızı ziyaret edin.",
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
    "topicName": "Flight Cancelations and Change",
    "topicTranslation": "Uçuş iptali ve değişikliği",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-284203-16",
    "linkUri": "/tr-tr/bilgi-edin/ucus-iptali-ve-degisikligi-sorulari/index.html",
    "uniqueId": "Uuiptalivedeiiklii",
    "seoUrl": "ucus-iptali-ve-degisikligi-sorulari",
    "metadata": {
      "title": "Uçuş İptali ve Değişiklik Soruları | Türk Hava Yolları ®",
      "keywords": [
        "Uçuş iptali ve değişikliği "
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
      "description": "Uçuş iptali ve değişiklik işlemleri hakkında detaylı bilgi almak ve süreci öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Flight packages for domestic flights",
    "topicTranslation": "İç hat uçuş paketleri",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-267143-16",
    "linkUri": "/tr-tr/bilgi-edin/ic-hat-ucus-paketleri-sorulari/index.html",
    "uniqueId": "hatuupaketleri",
    "seoUrl": "ic-hat-ucus-paketleri-sorulari",
    "metadata": {
      "title": "İç Hat Uçuş Paketleri Soruları | Türk Hava Yolları ®",
      "keywords": [
        "economy class soru bilgisi",
        "extrafly soru bilgisi",
        "primefly soru bilgisi",
        "bonus miles soru bilgisi",
        "ecofly soru bilgisi",
        "thy soru bilgisi",
        "turk hava yollari ",
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
      "description": "İç hat uçuş paketleri hakkında detaylı bilgi almak ve avantajlı seçenekleri öğrenmek için sayfamızı ziyaret edin.",
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
    "topicName": "Flight packages for International flights",
    "topicTranslation": "Dış hat uçuş paketleri",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-376573-16",
    "linkUri": "/tr-tr/bilgi-edin/dis-hat-ucus-paketleri-sorulari/index.html",
    "uniqueId": "Dhatuupaketleri",
    "seoUrl": "dis-hat-ucus-paketleri-sorulari",
    "metadata": {
      "title": "Dış Hat Uçuş Paketleri Hakkında Sorular | Türk Hava Yolları ®",
      "keywords": [
        "turkishairlines.com faq information",
        "economy class faq information",
        "extrafly faq information",
        "primefly faq information",
        "bonus miles faq information",
        "discount flight tickets faq information",
        "ecofly faq information",
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
      "description": "Dış hat uçuş paketleri hakkında sıkça sorulan sorulara yanıt almak ve seyahatinizi planlamak için sayfamızı ziyaret edin.",
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
    "topicName": "Hold the price",
    "topicTranslation": "Fiyat sabitleme",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-376574-16",
    "linkUri": "/tr-tr/bilgi-edin/fiyat-sabitleme-sorulari/index.html",
    "uniqueId": "Fiyatsabitleme",
    "seoUrl": "fiyat-sabitleme-sorulari",
    "metadata": {
      "title": "Fiyat Sabitleme Soruları | Türk Hava Yolları ®",
      "keywords": [
        "turkish airlines",
        "Hold the price",
        "any questions",
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
      "description": "Fiyat sabitleme uygulaması hakkında detaylı bilgi almak ve avantajlı seyahat planlamak için sayfamızı ziyaret edin.",
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
    "topicName": "Mobile",
    "topicTranslation": "Mobil",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-257936-16",
    "linkUri": "/tr-tr/bilgi-edin/mobil-sorulari/index.html",
    "uniqueId": "Mobil",
    "seoUrl": "mobil-sorulari",
    "metadata": {
      "title": "Mobil İşlemler Soruları | Türk Hava Yolları ®",
      "keywords": [
        "mobil",
        "thy servisi",
        "mobil soruları",
        "thy sorular",
        "türk hava yolları",
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
      "description": "Mobil işlemlerle ilgili sıkça sorulan sorulara yanıt almak ve işlemlerinizi kolaylaştırmak için sayfamızı ziyaret edin.",
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
    "topicName": "Taking Photos and Videos",
    "topicTranslation": "Fotoğraf ve video çekimi",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-376575-16",
    "linkUri": "/tr-tr/bilgi-edin/fotograf-ve-video-cekimi-sorulari/index.html",
    "uniqueId": "Fotorafvevideoekimi",
    "seoUrl": "fotograf-ve-video-cekimi-sorulari",
    "metadata": {
      "title": "Fotoğraf ve video çekimi Soruları | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "turkish airlines",
        "Taking Photos and Videos",
        "any questions",
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
      "description": "Fotoğraf ve video çekimi hakkında sık sorulan sorulara ve seyahatinizde size yardımcı olacak cevaplara göz atın.",
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
    "topicName": "Visa and travel requirements",
    "topicTranslation": "Vize ve seyahat bilgileri",
    "sectionName": "RESERVATION and BOOKINGS",
    "sectionTranslation": "REZERVASYON VE BİLETLEME",
    "tcmID": "tcm:92-22706-16",
    "linkUri": "/tr-tr/bilgi-edin/seyahat-belgeleri-sorulari/index.html",
    "uniqueId": "Vizeveseyahatbilgileri",
    "seoUrl": "vize-ve-seyahat-bilgileri-sorulari",
    "metadata": {
      "title": "Vize ve seyahat bilgileri | Bilgi Edin | Türk Hava Yolları ®",
      "keywords": [
        "visas faq information",
        "travel visa faq information",
        "visa documents faq information",
        "travel documents faq information",
        "passport faq information",
        "passport documents faq information",
        "turkish airlines",
        "visa and travel requirement",
        "any questions",
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
      "description": "Vize ve seyahat bilgileri hakkında sık sorulan sorulara ve seyahatinizde size yardımcı olacak cevaplara göz atın.",
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

async function importReservationBookingsTopics(app) {
  const locale = 'tr-TR';

  try {
    // 1. Find or create RESERVATION and BOOKINGS section
    console.log('🔍 Looking for RESERVATION and BOOKINGS section...');
    let section = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      filters: {
        sectionName: 'RESERVATION and BOOKINGS',
      },
      limit: 1,
    });

    if (!section || section.length === 0) {
      console.log('📝 Creating RESERVATION and BOOKINGS section...');
      section = await app.entityService.create('api::faq-section.faq-section', {
        data: {
          sectionName: 'RESERVATION and BOOKINGS',
          sectionTranslation: 'REZERVASYON VE BİLETLEME',
          order: 0,
        },
        locale: locale,
      });
      console.log('✅ RESERVATION and BOOKINGS section created with ID:', section.id);
    } else {
      section = section[0];
      console.log('✅ Found existing RESERVATION and BOOKINGS section with ID:', section.id);
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

    global.strapi = app;

    await importReservationBookingsTopics(app);
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

