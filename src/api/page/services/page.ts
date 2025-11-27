/**
 * page service.
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::page.page', ({ strapi }) => ({
  /**
   * Build full path for a page based on parent hierarchy
   */
  async buildFullPath(pageId: string | number, locale?: string) {
    const page: any = await strapi.entityService.findOne('api::page.page', pageId, {
      populate: ['parent'],
      locale,
    });

    if (!page) return null;

    const pathSegments: string[] = [page.slug];
    let currentParent: any = page.parent;

    // Traverse up the parent chain
    while (currentParent) {
      const parent: any = await strapi.entityService.findOne('api::page.page', currentParent.id, {
        populate: ['parent'],
        locale,
      });
      
      if (parent) {
        pathSegments.unshift(parent.slug);
        currentParent = parent.parent;
      } else {
        break;
      }
    }

    return '/' + pathSegments.join('/');
  },

  /**
   * Update full path for a page and all its children
   */
  async updatePagePath(pageId: string | number, locale?: string) {
    const page: any = await strapi.entityService.findOne('api::page.page', pageId, {
      populate: ['parent', 'children'],
      locale,
    });

    if (!page) return;

    const fullPath = await this.buildFullPath(pageId, locale);

    // Update current page
    await strapi.entityService.update('api::page.page', pageId, {
      data: { fullPath },
      locale,
    });

    // Recursively update all children
    if (page.children && Array.isArray(page.children) && page.children.length > 0) {
      for (const child of page.children) {
        await this.updatePagePath(child.id, locale);
      }
    }
  },

  /**
   * Get page by full path
   */
  async findByPath(path: string, locale?: string) {
    const pathSegments = path.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) return null;

    // Start from root (no parent)
    let currentPage: any = null;
    
    for (const segment of pathSegments) {
      const filters: any = {
        slug: { $eq: segment },
      };

      if (currentPage) {
        filters.parent = { id: { $eq: currentPage.id } };
      } else {
        filters.parent = { $null: true };
      }

      const pages = await strapi.entityService.findMany('api::page.page', {
        filters,
        locale,
        limit: 1,
      });

      if (pages.length === 0) return null;
      currentPage = pages[0];
    }

    return currentPage;
  },

  /**
   * Get breadcrumb trail for a page
   */
  async getBreadcrumbs(pageId: string | number, locale?: string) {
    const breadcrumbs: Array<{ id: string | number; title: string; slug: string; fullPath: string }> = [];
    let currentPage: any = await strapi.entityService.findOne('api::page.page', pageId, {
      populate: ['parent'],
      locale,
    });

    while (currentPage) {
      const fullPath = currentPage.fullPath || await this.buildFullPath(currentPage.id, locale);
      
      breadcrumbs.unshift({
        id: currentPage.id,
        title: currentPage.title,
        slug: currentPage.slug,
        fullPath: fullPath || `/${currentPage.slug}`,
      });

      if (currentPage.parent) {
        currentPage = await strapi.entityService.findOne('api::page.page', currentPage.parent.id, {
          populate: ['parent'],
          locale,
        });
      } else {
        break;
      }
    }

    return breadcrumbs;
  },

  /**
   * Get all child IDs recursively for a page
   */
  async getAllChildrenIds(pageId: string | number, locale?: string): Promise<Set<string | number>> {
    const visited = new Set<string | number>();
    
    const traverse = async (id: string | number) => {
      if (visited.has(id)) {
        return; // Circular reference prevention
      }
      
      visited.add(id);

      const page: any = await strapi.entityService.findOne('api::page.page', id, {
        populate: ['children'],
        locale,
      });

      if (page && page.children && Array.isArray(page.children)) {
        for (const child of page.children) {
          await traverse(child.id);
        }
      }
    };

    await traverse(pageId);
    return visited;
  },

  /**
   * Get available parent options for a page (excludes self and all children)
   * This is used in admin panel to filter parent dropdown
   */
  async getAvailableParents(pageId: string | number | null, locale?: string) {
    // Tüm sayfaları getir
    const allPages = await strapi.entityService.findMany('api::page.page', {
      locale,
      fields: ['id', 'title', 'slug', 'fullPath'],
    });

    // Eğer pageId varsa, kendisini ve tüm child'larını hariç tut
    if (pageId) {
      const excludedIds = await this.getAllChildrenIds(pageId, locale);
      excludedIds.add(pageId); // Kendisini de ekle

      return allPages.filter((page: any) => !excludedIds.has(page.id));
    }

    // Yeni sayfa oluşturuluyorsa, tüm sayfaları döndür
    return allPages;
  },

  /**
   * Get available children options for a page (excludes parent and self)
   * This is used in admin panel to filter children dropdown
   */
  async getAvailableChildren(pageId: string | number | null, locale?: string) {
    // Tüm sayfaları getir
    const allPages = await strapi.entityService.findMany('api::page.page', {
      locale,
      fields: ['id', 'title', 'slug', 'fullPath'],
    });

    // Eğer pageId varsa, parent'ı ve kendisini hariç tut
    if (pageId) {
      const queryOptions: any = {
        fields: ['id', 'parent'],
      };
      if (locale) {
        queryOptions.locale = locale;
      }

      const currentPage: any = await strapi.entityService.findOne('api::page.page', pageId, queryOptions);
      
      if (currentPage) {
        const excludedIds = new Set<string | number>();
        excludedIds.add(pageId); // Kendisini ekle

        // Parent'ı ekle
        if (currentPage.parent) {
          const parentId = typeof currentPage.parent === 'object' ? currentPage.parent.id : currentPage.parent;
          excludedIds.add(parentId);
        }

        return allPages.filter((page: any) => !excludedIds.has(page.id));
      }
    }

    // Yeni sayfa oluşturuluyorsa, tüm sayfaları döndür
    return allPages;
  },
}));

