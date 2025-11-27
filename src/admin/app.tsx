// @ts-ignore - StrapiApp type is available at runtime
import type { StrapiApp } from "@strapi/strapi/admin";
import { TranslationButton } from "./components/TranslationButton";
import { PageChildrenFilter } from "./components/PageChildrenFilter";

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
          rightLinks.push({
            name: "TranslationButton",
            Component: TranslationButton,
          });
        }

        // Inject PageChildrenFilter to filter out parent from children list
        const leftLinks = cmPlugin.injectionZones.editView["left-links"];
        if (Array.isArray(leftLinks)) {
          leftLinks.push({
            name: "PageChildrenFilter",
            Component: PageChildrenFilter,
          });
        }
      }
    } catch (error) {
      console.error("Error registering components:", error);
    }
  },
  bootstrap(app: any) {
    // Bootstrap hook - component is already registered
  },
};
