/**
 * faq-section router.
 */

export default {
  routes: [
    {
      method: "GET",
      path: "/v1/cms/faq-sections",
      handler: "api::faq-section.faq-section.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/v1/cms/faq-sections/:id",
      handler: "api::faq-section.faq-section.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/v1/cms/faq-sections",
      handler: "api::faq-section.faq-section.create",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/v1/cms/faq-sections/:id",
      handler: "api::faq-section.faq-section.update",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/v1/cms/faq-sections/:id",
      handler: "api::faq-section.faq-section.delete",
      config: {
        auth: false,
      },
    },
  ],
};

