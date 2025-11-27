export default {
  /**
   * Before create: Validate parent and children selection
   */
  async beforeCreate(event) {
    const { data } = event.params;
    
    if (data.parent) {
      // Circular reference kontrolü
      // Eğer parent, mevcut sayfanın child'ı ise veya kendisi ise hata ver
      await validateParentSelection(data.parent, null, event.params.locale);
    }

    // Validate children selection - parent cannot be a child
    if (data.children && Array.isArray(data.children) && data.parent) {
      const parentId = typeof data.parent === 'object' ? data.parent.id : data.parent;
      
      // Check if parent is in children list
      const parentInChildren = data.children.some((child: any) => {
        const childId = typeof child === 'object' ? child.id : child;
        return childId === parentId;
      });

      if (parentInChildren) {
        throw new Error('Cannot add parent page as a child. A page cannot be both parent and child of the same page.');
      }
    }
  },

  /**
   * Before update: Validate parent/children selection and check publish permissions
   */
  async beforeUpdate(event: any) {
    const { data, where } = event.params;
    const locale = event.params.locale;
    const queryOptions: any = {};
    if (locale) {
      queryOptions.locale = locale;
    }
    
    const currentPage = await strapi.entityService.findOne('api::page.page', where.id, queryOptions);

    if (!currentPage) {
      throw new Error('Page not found');
    }

    // Validate parent selection
    if (data.parent) {
      // Circular reference kontrolü
      await validateParentSelection(data.parent, currentPage.id, locale);
    }

    // Validate children selection - parent cannot be a child
    if (data.children && Array.isArray(data.children)) {
      const currentPageAny: any = currentPage;
      const parentId = currentPageAny.parent 
        ? (typeof currentPageAny.parent === 'object' ? currentPageAny.parent.id : currentPageAny.parent)
        : null;

      if (parentId) {
        // Check if parent is in children list
        const parentInChildren = data.children.some((child: any) => {
          const childId = typeof child === 'object' ? child.id : child;
          return childId === parentId;
        });

        if (parentInChildren) {
          throw new Error('Cannot add parent page as a child. A page cannot be both parent and child of the same page.');
        }
      }

      // Also check if current page is trying to add itself as child
      const selfInChildren = data.children.some((child: any) => {
        const childId = typeof child === 'object' ? child.id : child;
        return childId === currentPage.id;
      });

      if (selfInChildren) {
        throw new Error('Cannot add the same page as its own child.');
      }
    }

    // Check if this is a publish action (publishedAt is being set)
    const isPublishing = data.publishedAt !== undefined && data.publishedAt !== null;
    const wasPublished = currentPage.publishedAt !== null;

    if (isPublishing && !wasPublished) {
      // Try to get user from request context
      let userId: number | undefined;
      try {
        const ctx = strapi.requestContext.get();
        userId = ctx?.state?.user?.id;
      } catch (e) {
        // No request context, might be from script - allow for backward compatibility
        return;
      }

      // If no user context, allow publish (might be from script or migration)
      if (!userId) {
        return;
      }

      // Check if user has publish permission
      const hasPermission = await strapi.service('api::approval.approval').hasPublishPermission(userId);

      if (!hasPermission) {
        // User doesn't have permission, prevent publish
        delete data.publishedAt;
        throw new Error(
          'You do not have permission to publish content directly. Please submit your content for approval. An admin will review and publish it.'
        );
      }

      // If user has permission, check if content is already approved
      const entityWithApproval: any = await strapi.entityService.findOne('api::page.page', where.id, {
        ...queryOptions,
        populate: ['approvalStatus'],
      });
      
      if (entityWithApproval?.approvalStatus?.status === 'pending') {
        // Update approval status to approved
        if (entityWithApproval.approvalStatus.id) {
          data.approvalStatus = {
            id: entityWithApproval.approvalStatus.id,
            status: 'approved',
            reviewedAt: new Date(),
            reviewedBy: userId,
          };
        }
      }
    }
  },
};

/**
 * Validate parent selection to prevent circular references
 */
async function validateParentSelection(parentId: string | number, currentPageId: string | number | null, locale?: string) {
  // Parent'ın tüm child'larını recursive olarak bul
  const getAllChildrenIds = async (pageId: string | number, visited: Set<string | number> = new Set()): Promise<Set<string | number>> => {
    if (visited.has(pageId)) {
      return visited; // Circular reference tespit edildi
    }
    
    visited.add(pageId);

    const queryOptions: any = {
      populate: ['children'],
    };
    if (locale) {
      queryOptions.locale = locale;
    }

    const page: any = await strapi.entityService.findOne('api::page.page', pageId, queryOptions);

    if (page && page.children && Array.isArray(page.children)) {
      for (const child of page.children) {
        await getAllChildrenIds(child.id, visited);
      }
    }

    return visited;
  };

  // Eğer currentPageId varsa, onun child'larını kontrol et
  if (currentPageId) {
    const childrenIds = await getAllChildrenIds(currentPageId);
    
    // Parent, mevcut sayfanın child'ı olamaz
    if (childrenIds.has(parentId)) {
      throw new Error('Cannot select a child page as parent. This would create a circular reference.');
    }

    // Parent, mevcut sayfa olamaz
    if (parentId === currentPageId) {
      throw new Error('Cannot select the same page as its own parent.');
    }
  }

  // Parent'ın kendisinin child'larını kontrol et
  const parentChildrenIds = await getAllChildrenIds(parentId);
  
  // Eğer currentPageId varsa ve parent'ın child'ı ise, bu zaten yukarıda kontrol edildi
  // Ama ekstra güvenlik için tekrar kontrol edelim
  if (currentPageId && parentChildrenIds.has(currentPageId)) {
    throw new Error('Circular reference detected. Cannot set parent to a page that is already a child.');
  }
}

