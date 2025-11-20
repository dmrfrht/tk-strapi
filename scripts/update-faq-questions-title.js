/**
 * Update existing FAQ questions to add title field
 * 
 * Usage: node scripts/update-faq-questions-title.js
 */

const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function updateFaqQuestionsTitle() {
  let app;
  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';
    global.strapi = app;

    console.log('📝 Updating FAQ questions with title field...\n');

    // Get all questions from all locales
    const locales = ['tr-TR', 'en-US', 'de-DE'];
    let allQuestions = [];

    for (const locale of locales) {
      const questions = await app.entityService.findMany('api::faq-question.faq-question', {
        locale: locale,
        populate: '*',
      });
      if (questions && questions.length > 0) {
        allQuestions = allQuestions.concat(questions);
      }
    }

    console.log(`📊 Found ${allQuestions?.length || 0} questions\n`);

    let updatedCount = 0;
    let errorCount = 0;

    for (const question of allQuestions || []) {
      try {
        // If title is missing or empty, use first 100 chars of question
        if (!question.title || question.title.trim() === '') {
          const title = question.question ? question.question.substring(0, 100) : 'Untitled';
          
          const updateOptions = {
            data: {
              title: title,
            },
          };

          if (question.locale) {
            updateOptions.locale = question.locale;
          }

          await app.entityService.update('api::faq-question.faq-question', question.id, updateOptions);
          console.log(`✅ Updated question ID ${question.id}: "${title.substring(0, 50)}..."`);
          updatedCount++;
        } else {
          console.log(`⏭️  Question ID ${question.id} already has title`);
        }
      } catch (error) {
        console.error(`❌ Error updating question ID ${question.id}:`, error.message);
        errorCount++;
      }
    }

    console.log(`\n📊 Summary: ✅ ${updatedCount} | ❌ ${errorCount}`);

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

updateFaqQuestionsTitle();

