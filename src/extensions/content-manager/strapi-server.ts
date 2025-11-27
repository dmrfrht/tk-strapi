/**
 * Content Manager Extension
 * Overrides publish action to check permissions
 */

export default (plugin: any) => {
  // Helper function to check publish permission
  const checkPublishPermission = async (ctx: any) => {
    const { user } = ctx.state;
    
    if (!user) {
      ctx.unauthorized('You must be authenticated');
      return false;
    }

    // Check if user has publish permission
    const hasPermission = await strapi.service('api::approval.approval').hasPublishPermission(user.id);

    if (!hasPermission) {
      ctx.forbidden(
        'You do not have permission to publish content directly. Please submit your content for approval. An admin will review and publish it.'
      );
      return false;
    }

    return true;
  };

  // Override collection-types publish action
  if (plugin.controllers['collection-types']?.publish) {
    const originalPublish = plugin.controllers['collection-types'].publish.bind(plugin.controllers['collection-types']);
    
    plugin.controllers['collection-types'].publish = async (ctx: any) => {
      if (!(await checkPublishPermission(ctx))) {
        return;
      }
      return originalPublish(ctx);
    };
  }

  // Override collection-types unpublish action
  if (plugin.controllers['collection-types']?.unpublish) {
    const originalUnpublish = plugin.controllers['collection-types'].unpublish.bind(plugin.controllers['collection-types']);
    
    plugin.controllers['collection-types'].unpublish = async (ctx: any) => {
      if (!(await checkPublishPermission(ctx))) {
        return;
      }
      return originalUnpublish(ctx);
    };
  }

  // Override single-types publish action
  if (plugin.controllers['single-types']?.publish) {
    const originalPublish = plugin.controllers['single-types'].publish.bind(plugin.controllers['single-types']);
    
    plugin.controllers['single-types'].publish = async (ctx: any) => {
      if (!(await checkPublishPermission(ctx))) {
        return;
      }
      return originalPublish(ctx);
    };
  }

  // Override single-types unpublish action
  if (plugin.controllers['single-types']?.unpublish) {
    const originalUnpublish = plugin.controllers['single-types'].unpublish.bind(plugin.controllers['single-types']);
    
    plugin.controllers['single-types'].unpublish = async (ctx: any) => {
      if (!(await checkPublishPermission(ctx))) {
        return;
      }
      return originalUnpublish(ctx);
    };
  }

  return plugin;
};

