// @ts-ignore - StrapiApp type is available at runtime
import type { StrapiApp } from "@strapi/strapi/admin";
import { TranslationButton } from "./components/TranslationButton";
import { PageChildrenFilter } from "./components/PageChildrenFilter";
import { HidePublishButton } from "./components/HidePublishButton";
import { SubmitForApprovalButton } from "./components/SubmitForApprovalButton";
import { PendingApprovalsBadge } from "./components/PendingApprovalsBadge";

export default {
  config: {
    locales: [],
  },
  register(app: any) {
    // Inject TranslationButton component into Content Manager edit view
    try {
      const cmPlugin = app.getPlugin?.("content-manager");
      if (cmPlugin?.injectionZones?.editView) {
        const rightLinks = cmPlugin.injectionZones.editView["right-links"];
        if (Array.isArray(rightLinks)) {
          // Check if component already exists to avoid duplicate injection
          const hasTranslationButton = rightLinks.some(
            (link: any) => link.name === "TranslationButton"
          );
          if (!hasTranslationButton) {
            rightLinks.push({
              name: "TranslationButton",
              Component: TranslationButton,
            });
          }

          // Inject HidePublishButton to hide publish button for users without permission
          const hasHidePublishButton = rightLinks.some(
            (link: any) => link.name === "HidePublishButton"
          );
          if (!hasHidePublishButton) {
            rightLinks.push({
              name: "HidePublishButton",
              Component: HidePublishButton,
            });
          }

          // Inject SubmitForApprovalButton for users without publish permission
          const hasSubmitButton = rightLinks.some(
            (link: any) => link.name === "SubmitForApprovalButton"
          );
          if (!hasSubmitButton) {
            rightLinks.push({
              name: "SubmitForApprovalButton",
              Component: SubmitForApprovalButton,
            });
          }

          // Inject PendingApprovalsBadge to show pending count
          const hasBadge = rightLinks.some(
            (link: any) => link.name === "PendingApprovalsBadge"
          );
          if (!hasBadge) {
            rightLinks.push({
              name: "PendingApprovalsBadge",
              Component: PendingApprovalsBadge,
            });
          }
        }

        // Inject PageChildrenFilter to filter out parent from children list
        const leftLinks = cmPlugin.injectionZones.editView["left-links"];
        if (Array.isArray(leftLinks)) {
          const hasPageChildrenFilter = leftLinks.some(
            (link: any) => link.name === "PageChildrenFilter"
          );
          if (!hasPageChildrenFilter) {
            leftLinks.push({
              name: "PageChildrenFilter",
              Component: PageChildrenFilter,
            });
          }
        }
      }

      // Note: Custom menu links and pages in Strapi 5 require plugin extension
      // For now, users can access pending approvals via:
      // 1. API endpoint: GET /api/approval/pending
      // 2. Badge component (shows count and links to page)
      // 3. Direct URL: /admin/pending-approvals (if route is configured)
    } catch (error) {
      console.error("Error registering components:", error);
    }
  },
  bootstrap(app: any) {
    // Add badge to header if user has permission
    try {
      // Inject badge into header
      const headerPlugin = app.getPlugin?.("content-manager");
      if (headerPlugin) {
        // Badge will be shown via PendingApprovalsBadge component
      }
    } catch (error) {
      console.error("Error in bootstrap:", error);
    }
  },
};
