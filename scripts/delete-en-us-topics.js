/**
 * Delete all en-US topics to allow re-import with proper section relations
 *
 * Usage: node scripts/delete-en-us-topics.js
 */

async function deleteEnUsTopics() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  let app;

  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';

    global.strapi = app;

    console.log('🗑️  Deleting all en-US topics...\n');

    const locale = 'en-US';

    // Get all topics
    const allTopics = await app.entityService.findMany('api::faq-topic.faq-topic', {
      locale: locale,
    });

    console.log(`📊 Found ${allTopics?.length || 0} topics in ${locale}\n`);

    let deleted = 0;
    let errors = 0;

    for (const topic of allTopics || []) {
      try {
        await app.entityService.delete('api::faq-topic.faq-topic', topic.id);
        console.log(`✅ Deleted: "${topic.topicTranslation}" (ID: ${topic.id})`);
        deleted++;
      } catch (error) {
        console.error(`❌ Error deleting "${topic.topicTranslation}":`, error.message);
        errors++;
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('📊 FINAL SUMMARY:');
    console.log(`   ✅ Deleted: ${deleted}`);
    console.log(`   ❌ Errors: ${errors}`);
    console.log('='.repeat(50));
    console.log('\n💡 Now run: npm run import:en-us to re-import with proper section relations');

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

deleteEnUsTopics();

