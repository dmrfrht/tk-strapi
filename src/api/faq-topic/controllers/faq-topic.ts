/**
 * faq-topic controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::faq-topic.faq-topic",
  ({ strapi }) => ({
    async find(ctx) {
      const { language = "tr", country = "tr", locale } = ctx.query;

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
        // Normalize country code to uppercase
        const normalizedCountry = cntry.toUpperCase();
        // Normalize language code to lowercase
        const normalizedLang = lang.toLowerCase();
        // Return locale in format: language-COUNTRY
        return `${normalizedLang}-${normalizedCountry}`;
      };

      // Determine target locale
      let targetLocale: string;
      if (locale && typeof locale === "string") {
        // If locale is directly provided, use it
        targetLocale = locale;
      } else if (
        language &&
        country &&
        typeof language === "string" &&
        typeof country === "string"
      ) {
        // Build locale from language and country
        targetLocale = getLocaleFromLanguageAndCountry(language, country);
      } else {
        // Fallback to default
        targetLocale = "tr-TR";
      }

      // Fetch all sections with their topics for the specified locale
      // Note: locale is only set at the main query level, not in populate
      // Strapi automatically filters related content by the same locale
      let sections = await strapi.entityService.findMany(
        "api::faq-section.faq-section",
        {
          locale: targetLocale,
          populate: {
            topics: {
              populate: {
                metadata: true,
              },
              sort: ["order:asc"],
            },
          },
          filters: {
            publishedAt: {
              $notNull: true,
            },
          },
          sort: ["order:asc"],
        }
      );

      // If no sections found with full locale, try without published filter
      if (!sections || !Array.isArray(sections) || sections.length === 0) {
        sections = await strapi.entityService.findMany(
          "api::faq-section.faq-section",
          {
            locale: targetLocale,
            populate: {
              topics: {
                populate: {
                  metadata: true,
                },
                sort: ["order:asc"],
              },
            },
            sort: ["order:asc"],
          }
        );
      }

      // If still no results, try with language only as fallback
      if (!sections || !Array.isArray(sections) || sections.length === 0) {
        const languageOnly =
          typeof language === "string" ? language.toLowerCase() : "tr";
        sections = await strapi.entityService.findMany(
          "api::faq-section.faq-section",
          {
            locale: languageOnly,
            populate: {
              topics: {
                populate: {
                  metadata: true,
                },
                sort: ["order:asc"],
              },
            },
            sort: ["order:asc"],
          }
        );
      }

      // Last resort: try without locale
      if (!sections || !Array.isArray(sections) || sections.length === 0) {
        sections = await strapi.entityService.findMany(
          "api::faq-section.faq-section",
          {
            populate: {
              topics: {
                populate: {
                  metadata: true,
                },
                sort: ["order:asc"],
              },
            },
            sort: ["order:asc"],
          }
        );
      }

      // Transform data to match old API format
      const response: Record<string, any[]> = {};

      sections.forEach((section: any) => {
        const sectionKey = section.sectionTranslation || section.sectionName;

        if (!response[sectionKey]) {
          response[sectionKey] = [];
        }

        section.topics?.forEach((topic: any) => {
          response[sectionKey].push({
            topicName: topic.topicName,
            topicTranslation: topic.topicTranslation,
            sectionName: section.sectionName,
            sectionTranslation: section.sectionTranslation,
            tcmID: topic.tcmID || null,
            linkUri: topic.linkUri || null,
            uniqueId: topic.uniqueId || null,
            seoUrl: topic.seoUrl || null,
            metadata: topic.metadata
              ? {
                  title: topic.metadata.title || null,
                  keywords: topic.metadata.keywords || [],
                  robots: topic.metadata.robots || [],
                  description: topic.metadata.description || null,
                  parameters: topic.metadata.parameters || [],
                  pubId: topic.metadata.pubId || null,
                }
              : null,
          });
        });
      });

      return response;
    },
  })
);
