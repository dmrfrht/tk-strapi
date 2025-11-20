/**
 * Fix topic-section relationships for en-US locale
 * Uses the import data structure to map topics to sections
 *
 * Usage: node scripts/fix-topic-sections.js
 */

// Import the same data structure from import script
const enUsContent = require('./import-en-us-content.js').enUsContent || {};

// If not available, define it here
const sectionMapping = {
  "BAGGAGE": "BAGGAGE",
  "MILES & SMILES": "5 MILES&SMILES",
  "5 MILES SMILES": "5 MILES&SMILES",
  "RESERVATION AND BOOKINGS": "RESERVATION and BOOKINGS",
  "TURKISH AIRLINES HOLIDAYS": "TURKISH AIRLINES HOLIDAYS",
  "TK WALLET": "TK WALLET",
  "FLIGHT EXPERIENCE": "FLIGHT EXPERIENCE",
  "CORPORATE CLUB": "7 CORPORATE CLUB",
  "7 CORPORATE CLUB": "7 CORPORATE CLUB",
  "FARE RULES AND PAYMENT": "FARE RULES and PAYMENT",
  "ADDITIONAL SERVICES": "9 ADDITIONAL SERVICES",
  "9 ADDITIONAL SERVICES": "9 ADDITIONAL SERVICES",
  "PASSENGER TYPES": "PASSENGER TYPES",
  "PETS, MUSIC INSTRUMENTS AND SPORTS EQUIPMENTS": "PETS, MUSIC INSTRUMENTS and SPORTS EQUIPMENTS"
};

async function fixTopicSections() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  let app;

  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';

    global.strapi = app;

    console.log('🔧 Fixing topic-section relationships for en-US...\n');

    const locale = 'en-US';

    // Get all sections
    const sections = await app.entityService.findMany('api::faq-section.faq-section', {
      locale: locale,
      sort: ['order:asc'],
    });

    console.log(`📊 Found ${sections?.length || 0} sections in ${locale}\n`);

    // Create a map of sectionName -> section
    const sectionMap = new Map();
    sections.forEach((section) => {
      sectionMap.set(section.sectionName, section);
    });

    // Get all topics
    const allTopics = await app.entityService.findMany('api::faq-topic.faq-topic', {
      locale: locale,
      populate: {
        section: true,
      },
    });

    console.log(`📊 Found ${allTopics?.length || 0} topics in ${locale}\n`);

    // Create a map of uniqueId -> topic
    const topicMap = new Map();
    allTopics.forEach((topic) => {
      topicMap.set(topic.uniqueId, topic);
    });

    let fixed = 0;
    let skipped = 0;
    let errors = 0;

    // Process each section and its topics
    for (const [enSectionKey, topics] of Object.entries(enUsContent)) {
      const trSectionName = sectionMapping[enSectionKey] || enSectionKey;
      const section = sectionMap.get(trSectionName);

      if (!section) {
        console.log(`⚠️  Section "${trSectionName}" not found, skipping...`);
        continue;
      }

      console.log(`\n📦 Processing section: ${section.sectionName} (ID: ${section.id})`);

      for (const topicData of topics) {
        const topic = topicMap.get(topicData.uniqueId);

        if (!topic) {
          console.log(`⚠️  Topic "${topicData.topicTranslation}" (uniqueId: ${topicData.uniqueId}) not found`);
          continue;
        }

        // Check if topic already has correct section
        if (topic.section && (topic.section.id === section.id || topic.section.documentId === section.documentId)) {
          console.log(`⏭️  Topic "${topic.topicTranslation}" already linked to correct section`);
          skipped++;
          continue;
        }

        // Fix the section relation
        try {
          await app.entityService.update('api::faq-topic.faq-topic', topic.id, {
            data: {
              section: section.id,
            },
            locale: locale,
          });
          console.log(`✅ Fixed: "${topic.topicTranslation}" -> ${section.sectionName}`);
          fixed++;
        } catch (error) {
          console.error(`❌ Error fixing "${topic.topicTranslation}":`, error.message);
          errors++;
        }
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('📊 FINAL SUMMARY:');
    console.log(`   ✅ Fixed: ${fixed}`);
    console.log(`   ⏭️  Skipped: ${skipped}`);
    console.log(`   ❌ Errors: ${errors}`);
    console.log('='.repeat(50));

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

// We need to read the enUsContent from the import script
// For now, let's create a simpler approach: read the import script file and extract the data
const fs = require('fs');
const importScriptPath = require.resolve('./import-en-us-content.js');
const importScriptContent = fs.readFileSync(importScriptPath, 'utf8');

// Extract enUsContent using a simple regex (not perfect but works)
const enUsContentMatch = importScriptContent.match(/const enUsContent = ({[\s\S]*?});/);
if (enUsContentMatch) {
  try {
    eval(`global.enUsContent = ${enUsContentMatch[1]};`);
    fixTopicSections();
  } catch (e) {
    console.error('❌ Could not parse enUsContent from import script');
    console.error('Please run: npm run import:en-us to re-import with proper section relations');
    process.exit(1);
  }
} else {
  console.error('❌ Could not find enUsContent in import script');
  console.error('Please run: npm run import:en-us to re-import with proper section relations');
  process.exit(1);
}
