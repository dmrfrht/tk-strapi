// Function to generate preview pathname based on content type and document
const getPreviewPathname = (uid: string, { locale, document }: { locale?: string; document: any }): string | null => {
  // Handle Page content type
  if (uid === "api::page.page") {
    // Use fullPath if available, otherwise use path, otherwise use slug
    const path = document?.fullPath || document?.path || document?.slug;
    
    if (!path) {
      return null; // No preview if no path/slug
    }

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // Add locale prefix if locale is provided and not default
    if (locale && locale !== 'en' && locale !== 'tr-TR') {
      // Extract language code (e.g., 'en' from 'en-US')
      const langCode = locale.split('-')[0];
      return `/${langCode}${normalizedPath}`;
    }
    
    return normalizedPath;
  }

  // Other content types don't have preview
  return null;
};

export default ({ env }) => {
  // Get environment variables
  const clientUrl = env('CLIENT_URL', 'http://localhost:3000'); // Frontend application URL
  const previewSecret = env('PREVIEW_SECRET'); // Optional: Secret key for preview authentication

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    // Preview configuration
    preview: {
      enabled: true,
      config: {
        allowedOrigins: [clientUrl],
        async handler(uid: string, { documentId, locale, status }: { documentId: string; locale?: string; status?: string }) {
          try {
            // Only handle Page content type
            if (uid !== "api::page.page") {
              return null;
            }

            // Get the document with all fields populated
            // @ts-ignore - uid is a string but strapi.documents expects ContentType, cast to any
            const document = await strapi.documents(uid as any).findOne({ 
              documentId,
              locale: locale || undefined,
            });
            
            if (!document) {
              console.warn('Preview: Document not found', { uid, documentId, locale });
              return null;
            }

            // Debug: Log document to see what fields are available
            console.log('Preview: Document data', { 
              documentId, 
              locale, 
              slug: document.slug, 
              path: document.path, 
              fullPath: document.fullPath 
            });

            // Generate preview pathname
            const pathname = getPreviewPathname(uid, { locale, document });
            
            if (!pathname) {
              console.warn('Preview: No pathname generated', { 
                uid, 
                documentId, 
                locale,
                slug: document.slug,
                path: document.path,
                fullPath: document.fullPath
              });
              return null;
            }

            // Build preview URL
            let previewUrl = `${clientUrl}${pathname}`;
            
            // Add preview query parameters based on status
            if (status === 'draft') {
              // For draft content, add preview parameter
              previewUrl += `${pathname.includes('?') ? '&' : '?'}preview=true`;
              
              // Add preview secret if configured (for Next.js draft mode)
              if (previewSecret) {
                previewUrl += `&secret=${previewSecret}`;
              }
            }

            console.log('Preview URL generated:', previewUrl);
            return previewUrl;
          } catch (error) {
            console.error('Preview handler error:', error);
            return null;
          }
        },
      },
    },
  };
};
