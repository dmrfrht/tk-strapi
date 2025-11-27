/**
 * Lifecycle hooks for FAQ Topic
 */

export default {
  /**
   * Before update: Check if user is trying to publish
   * If publishing without permission, prevent it
   */
  async beforeUpdate(event: any) {
    const { params } = event;
    const { data, where } = params;
    const locale = params.locale;

    // Check if this is a publish action (publishedAt is being set)
    const isPublishing = data.publishedAt !== undefined && data.publishedAt !== null;

    if (!isPublishing) {
      return; // Not a publish action, continue normally
    }

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
      const entityId = typeof where?.id === 'object' ? where.id.id : where?.id;
      
      if (entityId) {
        // Remove publishedAt from data to prevent publish
        delete data.publishedAt;
        throw new Error(
          'You do not have permission to publish content directly. Please submit your content for approval. An admin will review and publish it.'
        );
      }
    }

    // If user has permission, check if content is already approved
    const queryOptions: any = {
      populate: ['approvalStatus'],
    };
    if (locale) {
      queryOptions.locale = locale;
    }

    const entityId = typeof where?.id === 'object' ? where.id.id : where?.id;
    if (entityId) {
      const entity: any = await strapi.entityService.findOne('api::faq-topic.faq-topic', entityId, queryOptions);
      
      if (entity?.approvalStatus?.status === 'pending') {
        // Update approval status to approved
        if (entity.approvalStatus.id) {
          data.approvalStatus = {
            id: entity.approvalStatus.id,
            status: 'approved',
            reviewedAt: new Date(),
            reviewedBy: userId,
          };
        }
      }
    }
  },
};

