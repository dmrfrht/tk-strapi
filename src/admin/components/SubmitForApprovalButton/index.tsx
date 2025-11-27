/**
 * Submit for Approval Button Component
 * 
 * Adds a "Submit for Approval" button for users without publish permission
 */

import React, { useState, useEffect } from 'react';
// @ts-ignore - These are available at runtime from Strapi admin
import { useFetchClient, useNotification } from '@strapi/strapi/admin';
import { Button } from '@strapi/design-system';

// Try to import useContentManagerContext
let useContentManagerContext: any = null;
try {
  const helperPlugin = require('@strapi/helper-plugin');
  useContentManagerContext = helperPlugin.useContentManagerContext;
} catch (e) {
  // Hook not available
}

export const SubmitForApprovalButton: React.FC = () => {
  const { post, get } = useFetchClient();
  const toggleNotification = useNotification();
  const [loading, setLoading] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [contentType, setContentType] = useState<string>('');
  const [id, setId] = useState<number | string>('');
  const [locale, setLocale] = useState<string>('');

  // Get Content Manager context
  useEffect(() => {
    const getCMData = () => {
      let cmData: any = null;

      if (useContentManagerContext) {
        try {
          cmData = useContentManagerContext();
        } catch (e) {
          // Hook not available
        }
      }

      // Try to get from window
      if (!cmData && typeof window !== 'undefined') {
        const hook = (window as any).__STRAPI__?.hooks?.useContentManagerContext;
        if (hook) {
          try {
            cmData = hook();
          } catch (e) {
            // Hook not available
          }
        }
      }

      if (cmData) {
        const modifiedData = cmData.modifiedData || cmData.initialData;
        if (modifiedData) {
          const entityId = modifiedData.id || modifiedData.documentId;
          if (entityId) {
            setId(entityId);
          }
          if (modifiedData.locale) {
            setLocale(modifiedData.locale);
          }
        }

        const layout = cmData.layout;
        if (layout) {
          const apiId = layout.apiID || layout.apiId;
          if (apiId) {
            setContentType(apiId);
          }
        }
      }

      // Try to get from URL
      if (typeof window !== 'undefined' && !contentType) {
        const path = window.location.pathname;
        const match = path.match(/collection-types\/([^/]+)/);
        if (match) {
          setContentType(match[1]);
        }
      }
    };

    getCMData();

    // Check if user has publish permission
    const checkPermission = async () => {
      try {
        await get('/api/approval/pending');
        setHasPermission(true);
      } catch (err: any) {
        if (err.response?.status === 403) {
          setHasPermission(false);
        } else {
          setHasPermission(false);
        }
      }
    };

    checkPermission();
  }, []);

  const handleSubmit = async () => {
    if (!contentType || !id) {
      toggleNotification({
        type: 'warning',
        message: 'İçerik bilgileri bulunamadı',
      });
      return;
    }

    try {
      setLoading(true);
      const url = `/api/approval/submit/${contentType}/${id}${locale ? `?locale=${locale}` : ''}`;
      const { data } = await post(url);

      if (data.success) {
        toggleNotification({
          type: 'success',
          message: 'İçerik onaya gönderildi. Bir admin gözden geçirecek.',
        });
        // Reload page after 1 second
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        throw new Error(data.message || 'Failed to submit for approval');
      }
    } catch (err: any) {
      console.error('Error submitting for approval:', err);
      toggleNotification({
        type: 'error',
        message: err.message || 'Onaya gönderilirken hata oluştu',
      });
    } finally {
      setLoading(false);
    }
  };

  // Only show button if user doesn't have publish permission
  if (hasPermission === null || hasPermission === true || !contentType || !id) {
    return null;
  }

  return (
    <Button
      variant="secondary"
      onClick={handleSubmit}
      loading={loading}
      disabled={loading}
    >
      Onaya Gönder
    </Button>
  );
};

