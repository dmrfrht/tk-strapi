import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  /**
   * Translate a single text
   */
  async translateText(ctx: any) {
    const { text, sourceLocale, targetLocale } = ctx.request.body;

    if (!text || !sourceLocale || !targetLocale) {
      return ctx.badRequest('Missing required fields: text, sourceLocale, targetLocale');
    }

    try {
      const translationService = strapi.service('api::translation.translation');
      const translatedText = await translationService.translateText(
        text,
        sourceLocale,
        targetLocale
      );

      ctx.body = {
        success: true,
        data: {
          original: text,
          translated: translatedText,
          sourceLocale,
          targetLocale,
        },
      };
    } catch (error: any) {
      strapi.log.error('Translation error:', error);
      // Handle specific error types
      let statusCode = 500;
      let errorMessage = error.message || 'Translation failed';
      
      if (error.message?.includes('quota') || error.message?.includes('429')) {
        statusCode = 429;
        errorMessage = 'API quota exceeded. Please check your billing details or try again later.';
      } else if (error.message?.includes('not found')) {
        statusCode = 404;
        errorMessage = 'Content not found. Please check the entry ID and locale.';
      } else if (error.message?.includes('API key') || error.message?.includes('authentication')) {
        statusCode = 401;
        errorMessage = 'API authentication failed. Please check your API key configuration.';
      }
      
      ctx.status = statusCode;
      ctx.body = {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Translate FAQ Question
   */
  async translateFaqQuestion(ctx: any) {
    const { questionId, sourceLocale, targetLocale } = ctx.request.body;

    if (!questionId || !sourceLocale || !targetLocale) {
      return ctx.badRequest('Missing required fields: questionId, sourceLocale, targetLocale');
    }

    try {
      strapi.log.info(`Translating FAQ Question: ${questionId} from ${sourceLocale} to ${targetLocale}`);
      const translationService = strapi.service('api::translation.translation');
      const translatedQuestion = await translationService.translateFaqQuestion(
        questionId,
        sourceLocale,
        targetLocale
      );

      ctx.body = {
        success: true,
        data: translatedQuestion,
      };
    } catch (error: any) {
      strapi.log.error('Translation error:', error);
      // Handle specific error types
      let statusCode = 500;
      let errorMessage = error.message || 'Translation failed';
      
      if (error.message?.includes('quota') || error.message?.includes('429')) {
        statusCode = 429;
        errorMessage = 'API quota exceeded. Please check your billing details or try again later.';
      } else if (error.message?.includes('not found')) {
        statusCode = 404;
        errorMessage = 'Content not found. Please check the entry ID and locale.';
      } else if (error.message?.includes('API key') || error.message?.includes('authentication')) {
        statusCode = 401;
        errorMessage = 'API authentication failed. Please check your API key configuration.';
      }
      
      ctx.status = statusCode;
      ctx.body = {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Translate FAQ Topic
   */
  async translateFaqTopic(ctx: any) {
    const { topicId, sourceLocale, targetLocale } = ctx.request.body;

    if (!topicId || !sourceLocale || !targetLocale) {
      return ctx.badRequest('Missing required fields: topicId, sourceLocale, targetLocale');
    }

    try {
      const translationService = strapi.service('api::translation.translation');
      const translatedTopic = await translationService.translateFaqTopic(
        topicId,
        sourceLocale,
        targetLocale
      );

      ctx.body = {
        success: true,
        data: translatedTopic,
      };
    } catch (error: any) {
      strapi.log.error('Translation error:', error);
      // Handle specific error types
      let statusCode = 500;
      let errorMessage = error.message || 'Translation failed';
      
      if (error.message?.includes('quota') || error.message?.includes('429')) {
        statusCode = 429;
        errorMessage = 'API quota exceeded. Please check your billing details or try again later.';
      } else if (error.message?.includes('not found')) {
        statusCode = 404;
        errorMessage = 'Content not found. Please check the entry ID and locale.';
      } else if (error.message?.includes('API key') || error.message?.includes('authentication')) {
        statusCode = 401;
        errorMessage = 'API authentication failed. Please check your API key configuration.';
      }
      
      ctx.status = statusCode;
      ctx.body = {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Translate FAQ Section
   */
  async translateFaqSection(ctx: any) {
    const { sectionId, sourceLocale, targetLocale } = ctx.request.body;

    if (!sectionId || !sourceLocale || !targetLocale) {
      return ctx.badRequest('Missing required fields: sectionId, sourceLocale, targetLocale');
    }

    try {
      const translationService = strapi.service('api::translation.translation');
      const translatedSection = await translationService.translateFaqSection(
        sectionId,
        sourceLocale,
        targetLocale
      );

      ctx.body = {
        success: true,
        data: translatedSection,
      };
    } catch (error: any) {
      strapi.log.error('Translation error:', error);
      // Handle specific error types
      let statusCode = 500;
      let errorMessage = error.message || 'Translation failed';
      
      if (error.message?.includes('quota') || error.message?.includes('429')) {
        statusCode = 429;
        errorMessage = 'API quota exceeded. Please check your billing details or try again later.';
      } else if (error.message?.includes('not found')) {
        statusCode = 404;
        errorMessage = 'Content not found. Please check the entry ID and locale.';
      } else if (error.message?.includes('API key') || error.message?.includes('authentication')) {
        statusCode = 401;
        errorMessage = 'API authentication failed. Please check your API key configuration.';
      }
      
      ctx.status = statusCode;
      ctx.body = {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Translate all FAQ Questions for a topic
   */
  async translateFaqQuestionsByTopic(ctx: any) {
    const { topicName, sourceLocale, targetLocale } = ctx.request.body;

    if (!topicName || !sourceLocale || !targetLocale) {
      return ctx.badRequest('Missing required fields: topicName, sourceLocale, targetLocale');
    }

    try {
      // Find topic in source locale
      const topics = await strapi.entityService.findMany(
        'api::faq-topic.faq-topic',
        {
          locale: sourceLocale,
          filters: {
            topicName: topicName,
          },
          limit: 1,
        }
      );

      if (!topics || topics.length === 0) {
        return ctx.notFound(`Topic "${topicName}" not found in locale ${sourceLocale}`);
      }

      const topic = topics[0];

      // Find all questions for this topic
      const questions = await strapi.entityService.findMany(
        'api::faq-question.faq-question',
        {
          locale: sourceLocale,
          filters: {
            topic: {
              id: topic.id,
            },
          },
        }
      );

      if (!questions || questions.length === 0) {
        return ctx.body = {
          success: true,
          message: `No questions found for topic "${topicName}"`,
          data: [],
        };
      }

      // Translate topic first
      const translationService = strapi.service('api::translation.translation');
      await translationService.translateFaqTopic(topic.id, sourceLocale, targetLocale);

      // Translate all questions
      const translatedQuestions = [];
      for (const question of questions) {
        try {
          const translated = await translationService.translateFaqQuestion(
            question.id,
            sourceLocale,
            targetLocale
          );
          translatedQuestions.push(translated);
        } catch (error: any) {
          strapi.log.error(`Error translating question ${question.id}:`, error);
        }
      }

      ctx.body = {
        success: true,
        data: {
          topic: topicName,
          translatedQuestions: translatedQuestions.length,
          totalQuestions: questions.length,
        },
      };
    } catch (error: any) {
      strapi.log.error('Translation error:', error);
      // Handle specific error types
      let statusCode = 500;
      let errorMessage = error.message || 'Translation failed';
      
      if (error.message?.includes('quota') || error.message?.includes('429')) {
        statusCode = 429;
        errorMessage = 'API quota exceeded. Please check your billing details or try again later.';
      } else if (error.message?.includes('not found')) {
        statusCode = 404;
        errorMessage = 'Content not found. Please check the entry ID and locale.';
      } else if (error.message?.includes('API key') || error.message?.includes('authentication')) {
        statusCode = 401;
        errorMessage = 'API authentication failed. Please check your API key configuration.';
      }
      
      ctx.status = statusCode;
      ctx.body = {
        success: false,
        error: errorMessage,
      };
    }
  },
});

