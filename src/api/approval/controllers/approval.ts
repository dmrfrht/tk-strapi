/**
 * Approval Controller
 * Handles approval-related API endpoints
 */

import { errors } from '@strapi/utils';

const { ForbiddenError, NotFoundError, ValidationError } = errors;

export default ({ strapi }: { strapi: any }) => ({
  /**
   * Submit content for approval
   */
  async submit(ctx: any) {
    try {
      const { contentType, id } = ctx.params;
      const { locale } = ctx.query;
      const userId = ctx.state.user?.id;

      if (!userId) {
        throw new ForbiddenError('You must be authenticated to submit content for approval');
      }

      const fullContentType = `api::${contentType}.${contentType}`;
      await strapi.service('api::approval.approval').submitForApproval(fullContentType, id, userId, locale);

      ctx.body = {
        success: true,
        message: 'Content submitted for approval successfully',
      };
    } catch (error: any) {
      ctx.throw(error.status || 500, error.message || 'Failed to submit content for approval');
    }
  },

  /**
   * Approve and publish content
   */
  async approve(ctx: any) {
    try {
      const { contentType, id } = ctx.params;
      const { locale } = ctx.query;
      const userId = ctx.state.user?.id;

      if (!userId) {
        throw new ForbiddenError('You must be authenticated to approve content');
      }

      const fullContentType = `api::${contentType}.${contentType}`;
      await strapi.service('api::approval.approval').approveAndPublish(fullContentType, id, userId, locale);

      ctx.body = {
        success: true,
        message: 'Content approved and published successfully',
      };
    } catch (error: any) {
      ctx.throw(error.status || 500, error.message || 'Failed to approve content');
    }
  },

  /**
   * Reject content
   */
  async reject(ctx: any) {
    try {
      const { contentType, id } = ctx.params;
      const { locale } = ctx.query;
      const { reason } = ctx.request.body;
      const userId = ctx.state.user?.id;

      if (!userId) {
        throw new ForbiddenError('You must be authenticated to reject content');
      }

      if (!reason || reason.trim().length === 0) {
        throw new ValidationError('Rejection reason is required');
      }

      const fullContentType = `api::${contentType}.${contentType}`;
      await strapi.service('api::approval.approval').rejectContent(
        fullContentType,
        id,
        userId,
        reason,
        locale
      );

      ctx.body = {
        success: true,
        message: 'Content rejected successfully',
      };
    } catch (error: any) {
      ctx.throw(error.status || 500, error.message || 'Failed to reject content');
    }
  },

  /**
   * Get pending approvals
   */
  async getPending(ctx: any) {
    try {
      const { contentType } = ctx.query;
      const userId = ctx.state.user?.id;

      if (!userId) {
        throw new ForbiddenError('You must be authenticated to view pending approvals');
      }

      // Check if user has permission to view approvals
      const hasPermission = await strapi.service('api::approval.approval').hasPublishPermission(userId);
      if (!hasPermission) {
        throw new ForbiddenError('You do not have permission to view pending approvals');
      }

      const fullContentType = contentType ? `api::${contentType}.${contentType}` : undefined;
      const pendingItems = await strapi.service('api::approval.approval').getPendingApprovals(fullContentType);

      ctx.body = {
        success: true,
        data: pendingItems,
        count: pendingItems.length,
      };
    } catch (error: any) {
      ctx.throw(error.status || 500, error.message || 'Failed to get pending approvals');
    }
  },
});

