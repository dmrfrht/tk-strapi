/**
 * page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    /**
     * Override findOne to filter out parent from children list
     */
    async findOne(ctx) {
      const { id } = ctx.params;
      const { locale } = ctx.query;

      // Get the page with all relations
      const page: any = await strapi.entityService.findOne(
        "api::page.page",
        id,
        {
          populate: {
            parent: true,
            children: {
              populate: ["parent"],
            },
            content: true,
            seo: true,
          },
          locale,
        }
      );

      if (!page) {
        return ctx.notFound("Page not found");
      }

      // Filter out parent from children list if parent exists
      if (page.parent && page.children && Array.isArray(page.children)) {
        const parentId =
          typeof page.parent === "object" ? page.parent.id : page.parent;
        page.children = page.children.filter((child: any) => {
          const childId = typeof child === "object" ? child.id : child;
          return childId !== parentId;
        });
      }

      return { data: page };
    },

    /**
     * Get page by path
     */
    async findByPath(ctx) {
      const { path } = ctx.params;
      const { locale } = ctx.query;

      const page = await strapi
        .service("api::page.page")
        .findByPath(path, locale);

      if (!page) {
        return ctx.notFound("Page not found");
      }

      // Populate content
      const populatedPage: any = await strapi.entityService.findOne(
        "api::page.page",
        page.id,
        {
          populate: {
            content: true,
            seo: true,
            parent: true,
            children: {
              populate: ["parent"],
            },
          },
          locale,
        }
      );

      // Filter out parent from children list if parent exists
      if (
        populatedPage.parent &&
        populatedPage.children &&
        Array.isArray(populatedPage.children)
      ) {
        const parentId =
          typeof populatedPage.parent === "object"
            ? populatedPage.parent.id
            : populatedPage.parent;
        populatedPage.children = populatedPage.children.filter((child: any) => {
          const childId = typeof child === "object" ? child.id : child;
          return childId !== parentId;
        });
      }

      return { data: populatedPage };
    },

    /**
     * Get breadcrumbs for a page
     */
    async breadcrumbs(ctx) {
      const { id } = ctx.params;
      const { locale } = ctx.query;

      const breadcrumbs = await strapi
        .service("api::page.page")
        .getBreadcrumbs(id, locale);

      return { data: breadcrumbs };
    },

    /**
     * Get available parent options for a page (excludes self and all children)
     * Used in admin panel to filter parent dropdown
     */
    async availableParents(ctx) {
      const { id } = ctx.params; // Optional: page ID if editing existing page
      const { locale } = ctx.query;

      const availableParents = await strapi
        .service("api::page.page")
        .getAvailableParents(id || null, locale);

      return { data: availableParents };
    },

    /**
     * Get available children options for a page (excludes parent and self)
     * Used in admin panel to filter children dropdown
     */
    async availableChildren(ctx) {
      const { id } = ctx.params; // Optional: page ID if editing existing page
      const { locale } = ctx.query;

      const availableChildren = await strapi
        .service("api::page.page")
        .getAvailableChildren(id || null, locale);

      return { data: availableChildren };
    },
  })
);
