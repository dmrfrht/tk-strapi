/**
 * Hide Publish Button Component
 * 
 * Hides publish button for users without publish permission
 */

import React, { useEffect, useState } from 'react';
// @ts-ignore - These are available at runtime from Strapi admin
import { useFetchClient } from '@strapi/strapi/admin';

export const HidePublishButton: React.FC = () => {
  const { get } = useFetchClient();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const checkPermission = async () => {
      try {
        // Check if user has publish permission by trying to get pending approvals
        // Only users with publish permission can access this endpoint
        const { data } = await get('/api/approval/pending');
        // Success means user has permission - don't hide buttons
        setHasPermission(true);
      } catch (err: any) {
        // Only hide buttons if we get a 403 Forbidden error
        // Other errors (network, 500, etc.) should not hide buttons
        if (err.response?.status === 403) {
          setHasPermission(false);
        } else {
          // For other errors, assume user has permission (don't hide buttons)
          // This is safer - better to show buttons than hide them incorrectly
          setHasPermission(true);
        }
      }
    };

    checkPermission();
  }, [get]);

  useEffect(() => {
    // Function to find all publish buttons
    const findPublishButtons = (): HTMLElement[] => {
      const buttons: HTMLElement[] = [];
      
      // Find by aria-label
      const publishButtonsByAria = document.querySelectorAll(
        'button[aria-label*="Publish"], button[aria-label*="publish"], button[aria-label*="Yayınla"], button[aria-label*="yayınla"]'
      );
      publishButtonsByAria.forEach((btn) => {
        buttons.push(btn as HTMLElement);
      });

      // Find by data-testid
      const cmButtons = document.querySelectorAll('[data-testid*="publish"], [data-testid*="Publish"]');
      cmButtons.forEach((btn) => {
        if (!buttons.includes(btn as HTMLElement)) {
          buttons.push(btn as HTMLElement);
        }
      });

      // Find by text content (most reliable)
      const allButtons = document.querySelectorAll('button');
      allButtons.forEach((button) => {
        const text = button.textContent?.toLowerCase() || '';
        const ariaLabel = button.getAttribute('aria-label')?.toLowerCase() || '';
        
        if (
          (text.includes('publish') || 
           text.includes('yayınla') ||
           ariaLabel.includes('publish') ||
           ariaLabel.includes('yayınla')) &&
          !text.includes('onaya gönder') && 
          !text.includes('submit') &&
          !buttons.includes(button as HTMLElement)
        ) {
          buttons.push(button as HTMLElement);
        }
      });

      return buttons;
    };

    if (hasPermission === false) {
      // Hide publish/unpublish buttons
      const hideButtons = () => {
        const buttons = findPublishButtons();
        buttons.forEach((btn) => {
          // Store original display style if not already stored
          if (!btn.dataset.originalDisplay) {
            btn.dataset.originalDisplay = btn.style.display || '';
          }
          btn.style.display = 'none';
        });
      };

      // Run immediately
      hideButtons();

      // Run after a delay (in case buttons load later)
      const interval = setInterval(hideButtons, 500);

      // Also observe DOM changes
      const observer = new MutationObserver(hideButtons);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    } else if (hasPermission === true) {
      // Show publish buttons if they were hidden
      const showButtons = () => {
        const buttons = findPublishButtons();
        buttons.forEach((btn) => {
          // Restore original display style
          if (btn.dataset.originalDisplay !== undefined) {
            btn.style.display = btn.dataset.originalDisplay || '';
            delete btn.dataset.originalDisplay;
          } else {
            // If no original display was stored, just show it
            btn.style.display = '';
          }
        });
      };

      // Run immediately
      showButtons();

      // Run after a delay (in case buttons load later)
      const interval = setInterval(showButtons, 500);

      // Also observe DOM changes
      const observer = new MutationObserver(showButtons);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    }
  }, [hasPermission]);

  return null; // This component doesn't render anything
};

