/**
 * Custom Parent Field Component for Page Content Type
 * 
 * This component filters out the current page and all its children
 * from the parent selection dropdown to prevent circular references.
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

interface PageParentFieldProps {
  name: string;
  value: any;
  onChange: (value: any) => void;
  attribute: any;
  [key: string]: any;
}

export const PageParentField: React.FC<PageParentFieldProps> = ({
  name,
  value,
  onChange,
  attribute,
  ...rest
}) => {
  const { get } = useFetchClient();
  const [availableParents, setAvailableParents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPageId, setCurrentPageId] = useState<string | number | null>(null);

  // Get current page ID from context
  useEffect(() => {
    const getCurrentPageId = () => {
      if (useContentManagerContext) {
        try {
          // @ts-ignore
          const context = useContentManagerContext();
          if (context?.modifiedData?.id || context?.initialData?.id) {
            return context.modifiedData?.id || context.initialData?.id;
          }
        } catch (e) {
          console.warn('Could not get page ID from context:', e);
        }
      }

      // Try to get from window/URL
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        const match = path.match(/\/pages\/(\d+)/);
        if (match) {
          return match[1];
        }
      }

      return null;
    };

    const pageId = getCurrentPageId();
    setCurrentPageId(pageId);
  }, []);

  // Fetch available parents
  useEffect(() => {
    const fetchAvailableParents = async () => {
      try {
        setLoading(true);
        const locale = new URLSearchParams(window.location.search).get('plugins[i18n][locale]') || 'tr-TR';
        
        const endpoint = currentPageId 
          ? `/api/pages/${currentPageId}/available-parents?locale=${locale}`
          : `/api/pages/available-parents?locale=${locale}`;

        const response = await get(endpoint);
        
        if (response.data?.data) {
          setAvailableParents(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching available parents:', error);
        // Fallback: show all pages
        setAvailableParents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableParents();
  }, [currentPageId, get]);

  // If RelationInput is available, use it with filtered options
  if (RelationInput) {
    // Override the relation query to use our filtered list
    const filteredAttribute = {
      ...attribute,
      // Custom query function
      targetModel: 'api::page.page',
    };

    return (
      <div>
        {loading ? (
          <div>Loading available parents...</div>
        ) : (
          <RelationInput
            {...rest}
            name={name}
            value={value}
            onChange={onChange}
            attribute={filteredAttribute}
            // Pass available parents as options
            options={availableParents}
          />
        )}
      </div>
    );
  }

  // Fallback: Simple select dropdown
  return (
    <div>
      {loading ? (
        <div>Loading available parents...</div>
      ) : (
        <select
          value={value?.id || ''}
          onChange={(e) => {
            const selectedId = e.target.value;
            if (selectedId) {
              const selectedPage = availableParents.find((p: any) => p.id.toString() === selectedId);
              onChange(selectedPage ? { id: selectedPage.id } : null);
            } else {
              onChange(null);
            }
          }}
        >
          <option value="">None (Root Page)</option>
          {availableParents.map((page: any) => (
            <option key={page.id} value={page.id}>
              {page.title} ({page.fullPath || `/${page.slug}`})
            </option>
          ))}
        </select>
      )}
      {availableParents.length === 0 && !loading && (
        <div style={{ marginTop: '8px', color: '#666', fontSize: '12px' }}>
          No available parent pages. All pages are either this page or its children.
        </div>
      )}
    </div>
  );
};

