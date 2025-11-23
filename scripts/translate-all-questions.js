/**
 * Script to translate all FAQ questions from one locale to another
 * 
 * Usage:
 *   node scripts/translate-all-questions.js <sourceLocale> <targetLocale> [topicName]
 * 
 * Examples:
 *   node scripts/translate-all-questions.js tr-TR en-US
 *   node scripts/translate-all-questions.js tr-TR en-US "Disabled passengers"
 */

const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function translateAllQuestions(sourceLocale, targetLocale, topicName = null) {
  let app;
  
  try {
    console.log('\n' + '='.repeat(60));
    console.log('🌍 AI Translation Script');
    console.log('='.repeat(60));
    console.log(`Source Locale: ${sourceLocale}`);
    console.log(`Target Locale: ${targetLocale}`);
    if (topicName) {
      console.log(`Topic Filter: ${topicName}`);
    }
    console.log('='.repeat(60) + '\n');

    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';
    global.strapi = app;

    // Get translation service
    const translationService = app.service('api::translation.translation');

    // Build filters
    const filters = {
      publishedAt: {
        $notNull: true,
      },
    };

    // If topicName is provided, filter by topic
    if (topicName) {
      const topics = await app.entityService.findMany(
        'api::faq-topic.faq-topic',
        {
          locale: sourceLocale,
          filters: {
            topicName: topicName,
            publishedAt: {
              $notNull: true,
            },
          },
          limit: 1,
        }
      );

      if (!topics || topics.length === 0) {
        console.log(`❌ Topic "${topicName}" not found in ${sourceLocale}`);
        return;
      }

      filters.topic = {
        id: topics[0].id,
      };
    }

    // Find all questions in source locale
    const questions = await app.entityService.findMany(
      'api::faq-question.faq-question',
      {
        locale: sourceLocale,
        filters: filters,
      }
    );

    if (!questions || questions.length === 0) {
      console.log(`❌ No questions found in ${sourceLocale}`);
      return;
    }

    console.log(`📝 Found ${questions.length} questions to translate\n`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    // Translate each question
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      
      try {
        // Check if translation already exists
        const existing = await app.entityService.findMany(
          'api::faq-question.faq-question',
          {
            locale: targetLocale,
            filters: {
              legacyId: question.legacyId,
            },
            limit: 1,
          }
        );

        if (existing && existing.length > 0) {
          console.log(`⏭️  [${i + 1}/${questions.length}] Skipping "${question.question.substring(0, 50)}..." - already translated`);
          skipCount++;
          continue;
        }

        // Translate
        console.log(`🔄 [${i + 1}/${questions.length}] Translating "${question.question.substring(0, 50)}..."`);
        
        await translationService.translateFaqQuestion(
          question.id,
          sourceLocale,
          targetLocale
        );

        console.log(`✅ [${i + 1}/${questions.length}] Translated successfully`);
        successCount++;

        // Add delay to avoid rate limiting
        if (i < questions.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
        }
      } catch (error) {
        console.error(`❌ [${i + 1}/${questions.length}] Error translating question ${question.id}:`, error.message);
        errorCount++;
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Translation Summary');
    console.log('='.repeat(60));
    console.log(`✅ Success: ${successCount}`);
    console.log(`⏭️  Skipped: ${skipCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`📝 Total: ${questions.length}`);
    console.log('='.repeat(60) + '\n');

  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  } finally {
    if (app) {
      await app.destroy();
    }
    process.exit(0);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: node scripts/translate-all-questions.js <sourceLocale> <targetLocale> [topicName]');
  console.error('Example: node scripts/translate-all-questions.js tr-TR en-US');
  console.error('Example: node scripts/translate-all-questions.js tr-TR en-US "Disabled passengers"');
  process.exit(1);
}

const [sourceLocale, targetLocale, topicName] = args;

translateAllQuestions(sourceLocale, targetLocale, topicName).catch((error) => {
  console.error(error);
  process.exit(1);
});

