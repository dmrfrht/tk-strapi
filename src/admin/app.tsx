// @ts-ignore - StrapiApp type is available at runtime
import type { StrapiApp } from "@strapi/strapi/admin";
import { TranslationButton } from "./components/TranslationButton";

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
      }
    } catch (error) {
      console.error("Error registering translation component:", error);
    }
  },
  bootstrap(app: any) {
    // Bootstrap hook - component is already registered
  },
};
