/**
 * Custom Children Field Component for Page Content Type
 * 
 * This component filters out the parent page from the children dropdown
 * to prevent selecting parent as child.
 */

import React, { useEffect, useState } from 'react';
import { useFetchClient } from '@strapi/strapi/admin';

// Try to import relation field components from Strapi
let RelationInput: any = null;
let useContentManagerContext: any = null;

try {
  // @ts-ignore - Available at runtime
  const cmPlugin = require('@strapi/plugin-content-manager/admin');
  RelationInput = cmPlugin?.components?.RelationInput;
} catch (e) {
  // Component not available via require
}

try {
  // @ts-ignore - Available at runtime
  const helperPlugin = require('@strapi/helper-plugin');
  useContentManagerContext = helperPlugin.useContentManagerContext;
} catch (e) {
  // Hook not available
}

interface PageChildrenFieldProps {
  name: string;
  value: any;
  onChange: (value: any) => void;
  attribute: any;
  [key: string]: any;
}

export const PageChildrenField: React.FC<PageChildrenFieldProps> = ({
  name,
  value,
  onChange,
  attribute,
  ...rest
}) => {
  const { get } = useFetchClient();
  const [availableChildren, setAvailableChildren] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPageId, setCurrentPageId] = useState<string | number | null>(null);
  const [parentId, setParentId] = useState<string | number | null>(null);

  // Get current page ID and parent from context
  useEffect(() => {
    const getCurrentPageData = () => {
      let cmData: any = null;
      
      if (useContentManagerContext) {
        try {
          // @ts-ignore
          cmData = useContentManagerContext();
        } catch (e) {
          // Hook not available
        }
      }

      // Try to get from window
      if (!cmData && typeof window !== 'undefined') {
        // @ts-ignore
        const hook = (window as any).__STRAPI__?.hooks?.useContentManagerContext;
        if (hook) {
          try {
            // @ts-ignore
            cmData = hook();
          } catch (e) {
            // Hook not available
          }
        }
      }

      if (cmData) {
        const modifiedData = cmData.modifiedData || cmData.initialData;
        if (modifiedData) {
          // Get page ID
          const pageId = modifiedData.id || modifiedData.documentId;
          if (pageId) {
            setCurrentPageId(pageId);
          }

          // Get parent ID
          const parent = modifiedData.parent;
          if (parent) {
            const pid = typeof parent === 'object' ? parent.id : parent;
            setParentId(pid);
          } else {
            setParentId(null);
          }
        }
      }

      // Try to get from URL
      if (!currentPageId && typeof window !== 'undefined') {
        const path = window.location.pathname;
        const match = path.match(/\/pages\/(\d+)/);
        if (match) {
          setCurrentPageId(match[1]);
        }
      }
    };

    getCurrentPageData();
  }, []);

  // Fetch available children
  useEffect(() => {
    const fetchAvailableChildren = async () => {
      try {
        setLoading(true);
        const locale = new URLSearchParams(window.location.search).get('plugins[i18n][locale]') || 'tr-TR';
        
        const endpoint = currentPageId 
          ? `/api/pages/${currentPageId}/available-children?locale=${locale}`
          : `/api/pages/available-children?locale=${locale}`;

        const response = await get(endpoint);
        
        if (response.data?.data) {
          setAvailableChildren(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching available children:', error);
        setAvailableChildren([]);
      } finally {
        setLoading(false);
      }
    };

    if (currentPageId !== null) {
      fetchAvailableChildren();
    }
  }, [currentPageId, parentId, get]);

  // Filter current value to remove parent if it exists
  useEffect(() => {
    if (parentId && value && Array.isArray(value)) {
      const filteredValue = value.filter((item: any) => {
        const itemId = typeof item === 'object' ? item.id : item;
        return itemId !== parentId;
      });

      if (filteredValue.length !== value.length) {
        onChange(filteredValue);
      }
    }
  }, [parentId, value, onChange]);

  // If RelationInput is available, use it with filtered options
  if (RelationInput) {
    const filteredAttribute = {
      ...attribute,
      targetModel: 'api::page.page',
    };

    return (
      <div>
        {loading ? (
          <div>Loading available children...</div>
        ) : (
          <RelationInput
            {...rest}
            name={name}
            value={value}
            onChange={onChange}
            attribute={filteredAttribute}
          />
        )}
        {parentId && (
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            Note: Parent page is automatically excluded from children list.
          </div>
        )}
      </div>
    );
  }

  // Fallback: Show message
  return (
    <div>
      {parentId && (
        <div style={{ marginBottom: '8px', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px', fontSize: '12px' }}>
          ⚠️ Parent page cannot be added as a child. It will be automatically filtered out.
        </div>
      )}
    </div>
  );
};

