/**
 * faq-question controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::faq-question.faq-question",
  ({ strapi }) => ({
    async find(ctx) {
      const { language = "tr", country = "tr", locale, topicName } = ctx.query;

      /**
       * Map language and country to locale format
       * Examples:
       * - language=tr&country=tr -> tr-TR
       * - language=en&country=us -> en-US
       * - language=de&country=de -> de-DE
       */
      const getLocaleFromLanguageAndCountry = (
        lang: string,
        cntry: string
      ): string => {
        const normalizedCountry = cntry.toUpperCase();
        const normalizedLang = lang.toLowerCase();
        return `${normalizedLang}-${normalizedCountry}`;
      };

      // Determine target locale
      let targetLocale: string;
      if (locale && typeof locale === "string") {
        targetLocale = locale;
      } else if (
        language &&
        country &&
        typeof language === "string" &&
        typeof country === "string"
      ) {
        targetLocale = getLocaleFromLanguageAndCountry(language, country);
      } else {
        targetLocale = "tr-TR";
      }

      console.log(
        `[FAQ Questions] Requested locale: ${targetLocale}, topicName: ${topicName}`
      );

      // Build filters
      const filters: any = {
        publishedAt: {
          $notNull: true,
        },
      };

      // If topicName is provided, find the topic and filter by it
      if (topicName && typeof topicName === "string") {
        // Find topic by topicName in the target locale
        const topics = await strapi.entityService.findMany(
          "api::faq-topic.faq-topic",
          {
            locale: targetLocale,
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
          // Try without published filter
          const topicsWithoutPublished = await strapi.entityService.findMany(
            "api::faq-topic.faq-topic",
            {
              locale: targetLocale,
              filters: {
                topicName: topicName,
              },
              limit: 1,
            }
          );

          if (topicsWithoutPublished && topicsWithoutPublished.length > 0) {
            filters.topic = {
              id: topicsWithoutPublished[0].id,
            };
          } else {
            // No topic found, return empty array
            return [];
          }
        } else {
          filters.topic = {
            id: topics[0].id,
          };
        }
      }

      // Fetch questions
      let questions = await strapi.entityService.findMany(
        "api::faq-question.faq-question",
        {
          locale: targetLocale,
          filters: filters,
          sort: ["order:asc", "id:asc"],
        }
      );

      // If no questions found, try without published filter
      if (!questions || questions.length === 0) {
        const filtersWithoutPublished = { ...filters };
        delete filtersWithoutPublished.publishedAt;
        questions = await strapi.entityService.findMany(
          "api::faq-question.faq-question",
          {
            locale: targetLocale,
            filters: filtersWithoutPublished,
            sort: ["order:asc", "id:asc"],
          }
        );
      }

      console.log(
        `[FAQ Questions] Found ${questions?.length || 0} questions for locale: ${targetLocale}`
      );

      // Transform response to match requested format
      const response = (questions || []).map((question: any) => ({
        id: question.legacyId || String(question.id),
        question: question.question,
        answer: question.answer,
        lastModifiedDateTime: question.updatedAt || question.lastModifiedDateTime,
      }));

      return response;
    },
  })
);

