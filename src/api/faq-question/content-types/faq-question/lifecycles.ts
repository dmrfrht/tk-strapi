/**
 * Lifecycle hooks for FAQ Question
 * 
 * Note: Auto-translation via lifecycle hooks is disabled by default
 * to avoid unnecessary API costs. Use the translation API endpoints
 * to translate content manually when needed.
 */

export default {
  /**
   * After create - Optional auto-translation
   * Uncomment to enable auto-translation on create
   */
  // async afterCreate(event: any) {
  //   const { result, params } = event;
  //   const sourceLocale = params.locale || 'tr-TR';
  //   
  //   // Get all available locales except source
  //   const locales = await strapi.plugin('i18n').service('locales').find();
  //   const targetLocales = locales
  //     .filter((locale: any) => locale.code !== sourceLocale)
  //     .map((locale: any) => locale.code);
  //   
  //   // Translate to all other locales
  //   const translationService = strapi.service('api::translation.translation');
  //   for (const targetLocale of targetLocales) {
  //     try {
  //       await translationService.translateFaqQuestion(
  //         result.id,
  //         sourceLocale,
  //         targetLocale
  //       );
  //       strapi.log.info(`Auto-translated FAQ Question ${result.id} to ${targetLocale}`);
  //     } catch (error: any) {
  //       strapi.log.error(`Failed to auto-translate FAQ Question ${result.id} to ${targetLocale}:`, error);
  //     }
  //   }
  // },

  /**
   * After update - Optional auto-translation
   * Uncomment to enable auto-translation on update
   */
  // async afterUpdate(event: any) {
  //   const { result, params } = event;
  //   const sourceLocale = params.locale || 'tr-TR';
  //   
  //   // Only translate if content was actually changed
  //   if (!params.data || (!params.data.question && !params.data.answer)) {
  //     return;
  //   }
  //   
  //   // Get all available locales except source
  //   const locales = await strapi.plugin('i18n').service('locales').find();
  //   const targetLocales = locales
  //     .filter((locale: any) => locale.code !== sourceLocale)
  //     .map((locale: any) => locale.code);
  //   
  //   // Translate to all other locales
  //   const translationService = strapi.service('api::translation.translation');
  //   for (const targetLocale of targetLocales) {
  //     try {
  //       // Check if translation already exists
  //       const existing = await strapi.entityService.findMany(
  //         'api::faq-question.faq-question',
  //         {
  //           locale: targetLocale,
  //           filters: {
  //             legacyId: result.legacyId,
  //           },
  //           limit: 1,
  //         }
  //       );
  //       
  //       if (existing && existing.length > 0) {
  //         // Update existing translation
  //         await translationService.translateFaqQuestion(
  //           result.id,
  //           sourceLocale,
  //           targetLocale
  //         );
  //         strapi.log.info(`Auto-updated translation for FAQ Question ${result.id} to ${targetLocale}`);
  //       }
  //     } catch (error: any) {
  //       strapi.log.error(`Failed to auto-update translation for FAQ Question ${result.id} to ${targetLocale}:`, error);
  //     }
  //   }
  // },
};

