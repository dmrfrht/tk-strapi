/**
 * Page Children Filter Component
 * 
 * This component filters out the parent page from the children list
 * in the admin panel to prevent showing parent as child.
 */

import React, { useEffect } from 'react';

// Try to import Content Manager hooks
let useContentManagerContext: any = null;

try {
  // @ts-ignore - Available at runtime
  const helperPlugin = require('@strapi/helper-plugin');
  useContentManagerContext = helperPlugin.useContentManagerContext;
} catch (e) {
  // Hook not available
}

export const PageChildrenFilter: React.FC = () => {
  useEffect(() => {
    const filterChildren = () => {
      try {
        // Get Content Manager context
        let cmData: any = null;
        
        if (useContentManagerContext) {
          try {
            // @ts-ignore
            cmData = useContentManagerContext();
          } catch (e) {
            console.warn('Could not get CM context:', e);
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

        if (!cmData) return;

        // Get modified data
        const modifiedData = cmData.modifiedData || cmData.initialData;
        if (!modifiedData) return;

        // Get parent ID
        const parent = modifiedData.parent;
        if (!parent) return;

        const parentId = typeof parent === 'object' ? parent.id : parent;
        if (!parentId) return;

        // Get children
        const children = modifiedData.children;
        if (!Array.isArray(children)) return;

        // Filter out parent from children
        const filteredChildren = children.filter((child: any) => {
          const childId = typeof child === 'object' ? child.id : child;
          return childId !== parentId;
        });

        // Update modified data if children were filtered
        if (filteredChildren.length !== children.length) {
          if (cmData.onChange) {
            cmData.onChange({
              target: {
                name: 'children',
                value: filteredChildren,
              },
            });
          } else if (cmData.setModifiedData) {
            cmData.setModifiedData({
              ...modifiedData,
              children: filteredChildren,
            });
          }
        }
      } catch (error) {
        console.error('Error filtering children:', error);
      }
    };

    // Run filter on mount and when data changes
    filterChildren();
    
    // Also filter when DOM is ready (for admin panel)
    const interval = setInterval(() => {
      filterChildren();
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  return null; // This component doesn't render anything
};

