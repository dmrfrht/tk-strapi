/**
 * Approval Service
 * Handles content approval workflow
 */

import { errors } from '@strapi/utils';

const { ForbiddenError, NotFoundError } = errors;

export default ({ strapi }: { strapi: any }) => ({
  /**
   * Check if user has publish permission (admin or super admin)
   */
  async hasPublishPermission(userId?: number): Promise<boolean> {
    if (!userId) {
      // Try to get user from request context
      try {
        const ctx = strapi.requestContext.get();
        if (ctx?.state?.user?.id) {
          userId = ctx.state.user.id;
        } else {
          // No user context, might be from script - allow for backward compatibility
          return true;
        }
      } catch (e) {
        // No request context, might be from script - allow for backward compatibility
        return true;
      }
    }

    const user = await strapi.query('admin::user').findOne({
      where: { id: userId },
      populate: ['roles'],
    });

    if (!user || !user.isActive) {
      return false;
    }

    // Check if user is blocked
    if (user.blocked === true) {
      return false;
    }

    // Super admin check - In Strapi, super admin users typically have no roles
    // or have the strapi-super-admin role
    const hasNoRoles = !user.roles || user.roles.length === 0;
    
    if (hasNoRoles) {
      // User with no roles is typically a super admin in Strapi
      return true;
    }

    // Check for super admin role
    const superAdminRole = await strapi.query('admin::role').findOne({
      where: { 
        $or: [
          { code: 'strapi-super-admin' },
          { code: 'super-admin' },
          { name: 'Super Admin' }
        ]
      },
    });

    if (superAdminRole && user.roles?.some((role: any) => role.id === superAdminRole.id)) {
      return true;
    }

    // Editor role can also publish
    const editorRole = await strapi.query('admin::role').findOne({
      where: { code: 'strapi-editor' },
    });
    
    if (editorRole && user.roles?.some((role: any) => role.id === editorRole.id)) {
      return true;
    }

    return false;
  },

  /**
   * Submit content for approval
   */
  async submitForApproval(
    contentType: string,
    entityId: number,
    userId: number,
    locale?: string
  ): Promise<void> {
    const queryOptions: any = {
      populate: ['approvalStatus'],
    };
    if (locale) {
      queryOptions.locale = locale;
    }

    const entity = await strapi.entityService.findOne(contentType, entityId, queryOptions);

    if (!entity) {
      throw new NotFoundError(`Entity not found: ${contentType}:${entityId}`);
    }

    // Update approval status
    const approvalData: any = {
      status: 'pending',
      submittedAt: new Date(),
      submittedBy: userId,
    };

    if (entity.approvalStatus?.id) {
      await strapi.entityService.update(contentType, entityId, {
        data: {
          approvalStatus: {
            id: entity.approvalStatus.id,
            ...approvalData,
          },
        },
        ...queryOptions,
      });
    } else {
      await strapi.entityService.update(contentType, entityId, {
        data: {
          approvalStatus: approvalData,
        },
        ...queryOptions,
      });
    }

    // Send notification to admins
    await this.notifyAdmins(contentType, entityId, entity, userId);
  },

  /**
   * Approve content and publish it
   */
  async approveAndPublish(
    contentType: string,
    entityId: number,
    userId: number,
    locale?: string
  ): Promise<void> {
    // Check if user has publish permission
    const hasPermission = await this.hasPublishPermission(userId);
    if (!hasPermission) {
      throw new ForbiddenError('You do not have permission to approve and publish content');
    }

    const queryOptions: any = {
      populate: ['approvalStatus'],
    };
    if (locale) {
      queryOptions.locale = locale;
    }

    const entity = await strapi.entityService.findOne(contentType, entityId, queryOptions);

    if (!entity) {
      throw new NotFoundError(`Entity not found: ${contentType}:${entityId}`);
    }

    // Update approval status
    const approvalData: any = {
      status: 'approved',
      reviewedAt: new Date(),
      reviewedBy: userId,
    };

    if (entity.approvalStatus?.id) {
      await strapi.entityService.update(contentType, entityId, {
        data: {
          approvalStatus: {
            id: entity.approvalStatus.id,
            ...approvalData,
          },
        },
        ...queryOptions,
      });
    } else {
      await strapi.entityService.update(contentType, entityId, {
        data: {
          approvalStatus: approvalData,
        },
        ...queryOptions,
      });
    }

    // Publish the content
    await strapi.entityService.update(contentType, entityId, {
      data: {
        publishedAt: new Date(),
      },
      ...queryOptions,
    });
  },

  /**
   * Reject content
   */
  async rejectContent(
    contentType: string,
    entityId: number,
    userId: number,
    rejectionReason: string,
    locale?: string
  ): Promise<void> {
    // Check if user has publish permission
    const hasPermission = await this.hasPublishPermission(userId);
    if (!hasPermission) {
      throw new ForbiddenError('You do not have permission to reject content');
    }

    const queryOptions: any = {
      populate: ['approvalStatus'],
    };
    if (locale) {
      queryOptions.locale = locale;
    }

    const entity = await strapi.entityService.findOne(contentType, entityId, queryOptions);

    if (!entity) {
      throw new NotFoundError(`Entity not found: ${contentType}:${entityId}`);
    }

    // Update approval status
    const approvalData: any = {
      status: 'rejected',
      reviewedAt: new Date(),
      reviewedBy: userId,
      rejectionReason,
    };

    if (entity.approvalStatus?.id) {
      await strapi.entityService.update(contentType, entityId, {
        data: {
          approvalStatus: {
            id: entity.approvalStatus.id,
            ...approvalData,
          },
        },
        ...queryOptions,
      });
    } else {
      await strapi.entityService.update(contentType, entityId, {
        data: {
          approvalStatus: approvalData,
        },
        ...queryOptions,
      });
    }
  },

  /**
   * Notify admins about pending approval
   */
  async notifyAdmins(
    contentType: string,
    entityId: number,
    entity: any,
    submittedBy: number
  ): Promise<void> {
    try {
      // Get all admin users (super admin and editor roles)
      const superAdminRole = await strapi.query('admin::role').findOne({
        where: { 
          $or: [
            { code: 'strapi-super-admin' },
            { code: 'super-admin' },
            { name: 'Super Admin' }
          ]
        },
      });

      const editorRole = await strapi.query('admin::role').findOne({
        where: { code: 'strapi-editor' },
      });

      const adminUserIds: number[] = [];

      // Get super admins with super admin role
      if (superAdminRole) {
        const superAdmins = await strapi.query('admin::user').findMany({
          where: {
            roles: {
              id: superAdminRole.id,
            },
            isActive: true,
            blocked: false,
          },
        });
        adminUserIds.push(...superAdmins.map((u: any) => u.id));
      }

      // Get super admins with no roles (typical super admin users in Strapi)
      const superAdminsNoRole = await strapi.query('admin::user').findMany({
        where: {
          isActive: true,
          blocked: false,
        },
        populate: ['roles'],
      });
      
      // Filter users with no roles (these are typically super admins)
      const superAdminsNoRoleFiltered = superAdminsNoRole.filter((u: any) => 
        !u.roles || u.roles.length === 0
      );
      adminUserIds.push(...superAdminsNoRoleFiltered.map((u: any) => u.id));

      // Get editors
      if (editorRole) {
        const editors = await strapi.query('admin::user').findMany({
          where: {
            roles: {
              id: editorRole.id,
            },
            isActive: true,
            blocked: false,
          },
        });
        adminUserIds.push(...editors.map((u: any) => u.id));
      }

      // Remove duplicates
      const uniqueAdminIds = [...new Set(adminUserIds)];

      // Get content type display name
      const contentTypeInfo = strapi.contentTypes[contentType];
      const contentTypeName = contentTypeInfo?.info?.displayName || contentType;

      // Get entity title/name
      const entityTitle = entity.title || entity.topicName || entity.sectionName || `ID: ${entityId}`;

      // Get submitter info
      const submitter = await strapi.query('admin::user').findOne({
        where: { id: submittedBy },
      });
      const submitterName = submitter?.username || submitter?.email || 'Unknown';

      // Log notification
      strapi.log.info(
        `📢 Approval Request: ${contentTypeName} "${entityTitle}" (ID: ${entityId}) submitted by ${submitterName}`
      );

      // Send email notifications to admins
      for (const adminId of uniqueAdminIds) {
        // Skip if admin is the submitter
        if (adminId === submittedBy) {
          continue;
        }

        try {
          const admin = await strapi.query('admin::user').findOne({
            where: { id: adminId },
          });

          if (admin?.email) {
            await this.sendEmailNotification({
              to: admin.email,
              adminName: admin.firstname || admin.username || 'Admin',
              contentTypeName,
              entityTitle,
              entityId,
              submitterName,
              contentType,
            });
          }
        } catch (emailError: any) {
          strapi.log.error(`Failed to send email notification to admin ${adminId}:`, emailError);
          // Don't throw - email failure shouldn't break the approval process
        }
      }
    } catch (error: any) {
      strapi.log.error('Error notifying admins:', error);
      // Don't throw - notification failure shouldn't break the approval process
    }
  },

  /**
   * Get pending approvals
   */
  async getPendingApprovals(contentType?: string): Promise<any[]> {
    const contentTypes = contentType
      ? [contentType]
      : ['api::page.page', 'api::article.article', 'api::faq-question.faq-question', 'api::faq-topic.faq-topic', 'api::faq-section.faq-section'];

    const pendingItems: any[] = [];

    for (const ct of contentTypes) {
      try {
        const items = await strapi.entityService.findMany(ct, {
          filters: {
            approvalStatus: {
              status: 'pending',
            },
          },
          populate: ['approvalStatus.submittedBy', 'approvalStatus.reviewedBy'],
        });

        for (const item of items) {
          pendingItems.push({
            contentType: ct,
            id: item.id,
            title: item.title || item.topicName || item.sectionName || `ID: ${item.id}`,
            submittedAt: item.approvalStatus?.submittedAt,
            submittedBy: item.approvalStatus?.submittedBy,
            locale: item.locale,
          });
        }
      } catch (error: any) {
        strapi.log.error(`Error fetching pending approvals for ${ct}:`, error);
      }
    }

    return pendingItems.sort((a, b) => {
      const dateA = a.submittedAt ? new Date(a.submittedAt).getTime() : 0;
      const dateB = b.submittedAt ? new Date(b.submittedAt).getTime() : 0;
      return dateB - dateA; // Most recent first
    });
  },

  /**
   * Send email notification to admin
   */
  async sendEmailNotification(params: {
    to: string;
    adminName: string;
    contentTypeName: string;
    entityTitle: string;
    entityId: number;
    submitterName: string;
    contentType: string;
  }): Promise<void> {
    const { to, adminName, contentTypeName, entityTitle, entityId, submitterName, contentType } = params;

    try {
      // Check if email plugin is available
      const emailPlugin = strapi.plugin('email');
      if (!emailPlugin) {
        strapi.log.warn('Email plugin not found. Skipping email notification.');
        return;
      }

      // Get admin panel URL
      const adminUrl = process.env.ADMIN_URL || process.env.STRAPI_ADMIN_BACKEND_URL || 'http://localhost:1337/admin';
      const approvalUrl = `${adminUrl}/pending-approvals`;
      const editUrl = `${adminUrl}/content-manager/collection-types/${contentType}/${entityId}`;

      // Email subject
      const subject = `Yeni İçerik Onay Bekliyor: ${entityTitle}`;

      // Email HTML content
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4945ff; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f8f9fa; padding: 20px; border-radius: 0 0 5px 5px; }
            .button { display: inline-block; padding: 12px 24px; background-color: #4945ff; color: white; text-decoration: none; border-radius: 4px; margin-top: 20px; }
            .info { background-color: white; padding: 15px; margin: 15px 0; border-radius: 4px; border-left: 4px solid #4945ff; }
            .footer { margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📢 Yeni İçerik Onay Bekliyor</h1>
            </div>
            <div class="content">
              <p>Merhaba ${adminName},</p>
              
              <p>Yeni bir içerik onaya gönderildi ve gözden geçirmeniz gerekiyor.</p>
              
              <div class="info">
                <strong>İçerik Tipi:</strong> ${contentTypeName}<br>
                <strong>Başlık:</strong> ${entityTitle}<br>
                <strong>Gönderen:</strong> ${submitterName}<br>
                <strong>İçerik ID:</strong> ${entityId}
              </div>
              
              <p>
                <a href="${approvalUrl}" class="button">Onay Bekleyenleri Görüntüle</a>
                <a href="${editUrl}" class="button" style="margin-left: 10px;">İçeriği Düzenle</a>
              </p>
              
              <div class="footer">
                <p>Bu bir otomatik bildirimdir. Lütfen yanıtlamayın.</p>
                <p>Strapi Admin Panel</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;

      // Plain text version
      const text = `
Yeni İçerik Onay Bekliyor

Merhaba ${adminName},

Yeni bir içerik onaya gönderildi ve gözden geçirmeniz gerekiyor.

İçerik Tipi: ${contentTypeName}
Başlık: ${entityTitle}
Gönderen: ${submitterName}
İçerik ID: ${entityId}

Onay Bekleyenleri Görüntüle: ${approvalUrl}
İçeriği Düzenle: ${editUrl}

Bu bir otomatik bildirimdir.
      `;

      // Send email
      await emailPlugin.service('email').send({
        to,
        subject,
        html,
        text,
      });

      strapi.log.info(`Email notification sent to ${to} for content ${entityId}`);
    } catch (error: any) {
      strapi.log.error(`Failed to send email notification:`, error);
      throw error;
    }
  },
});

