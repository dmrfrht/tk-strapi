/**
 * faq-section controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::faq-section.faq-section",
  ({ strapi }) => ({
    async find(ctx) {
      const { locale } = ctx.query;

      // Determine locale from query
      const targetLocale = typeof locale === "string" ? locale : null;

      // Build populate object - always populate topics
      const populate: any = {
        topics: {
          populate: {
            metadata: true,
          },
          sort: ["order:asc"],
        },
      };

      // Fetch sections - try without published filter first
      const queryOptions: any = {
        populate: populate,
        sort: ["order:asc"],
      };

      if (targetLocale) {
        queryOptions.locale = targetLocale;
      }

      // First try with published filter
      let sections = await strapi.entityService.findMany(
        "api::faq-section.faq-section",
        {
          ...queryOptions,
          filters: {
            publishedAt: {
              $notNull: true,
            },
          },
        }
      );

      // If no results, try without published filter (for debugging)
      if (!sections || sections.length === 0) {
        sections = await strapi.entityService.findMany(
          "api::faq-section.faq-section",
          queryOptions
        );
      }

      // Transform response
      const transformedSections = (sections as any[]).map((section: any) => {
        const result: any = {
          id: section.id,
          sectionName: section.sectionName,
          sectionTranslation: section.sectionTranslation,
          order: section.order,
          locale: section.locale,
          createdAt: section.createdAt,
          updatedAt: section.updatedAt,
          publishedAt: section.publishedAt,
        };

        if (section.topics) {
          result.topics = (section.topics || []).map((topic: any) => ({
            id: topic.id,
            topicName: topic.topicName,
            topicTranslation: topic.topicTranslation,
            tcmID: topic.tcmID,
            linkUri: topic.linkUri,
            uniqueId: topic.uniqueId,
            seoUrl: topic.seoUrl,
            order: topic.order,
            metadata: topic.metadata
              ? {
                  title: topic.metadata.title,
                  keywords: topic.metadata.keywords,
                  robots: topic.metadata.robots,
                  description: topic.metadata.description,
                  parameters: topic.metadata.parameters,
                  pubId: topic.metadata.pubId,
                }
              : null,
          }));
        }

        return result;
      });

      return {
        data: transformedSections,
      };
    },

    async findOne(ctx) {
      const { id } = ctx.params;
      const { locale } = ctx.query;

      const targetLocale = typeof locale === "string" ? locale : null;

      const queryOptions: any = {
        populate: {
          topics: {
            populate: {
              metadata: true,
            },
            filters: {
              publishedAt: {
                $notNull: true,
              },
            },
            sort: ["order:asc"],
          },
        },
      };

      if (targetLocale) {
        queryOptions.locale = targetLocale;
      }

      const section = await strapi.entityService.findOne(
        "api::faq-section.faq-section",
        id,
        queryOptions
      );

      if (!section) {
        return ctx.notFound("Section not found");
      }

      const sectionWithTopics = section as any;

      return {
        data: {
          id: sectionWithTopics.id,
          sectionName: sectionWithTopics.sectionName,
          sectionTranslation: sectionWithTopics.sectionTranslation,
          order: sectionWithTopics.order,
          locale: sectionWithTopics.locale,
          createdAt: sectionWithTopics.createdAt,
          updatedAt: sectionWithTopics.updatedAt,
          publishedAt: sectionWithTopics.publishedAt,
          topics: (sectionWithTopics.topics || []).map((topic: any) => ({
            id: topic.id,
            topicName: topic.topicName,
            topicTranslation: topic.topicTranslation,
            tcmID: topic.tcmID,
            linkUri: topic.linkUri,
            uniqueId: topic.uniqueId,
            seoUrl: topic.seoUrl,
            order: topic.order,
            metadata: topic.metadata
              ? {
                  title: topic.metadata.title,
                  keywords: topic.metadata.keywords,
                  robots: topic.metadata.robots,
                  description: topic.metadata.description,
                  parameters: topic.metadata.parameters,
                  pubId: topic.metadata.pubId,
                }
              : null,
          })),
        },
      };
    },
  })
);
