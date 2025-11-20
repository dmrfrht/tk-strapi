export default {
  routes: [
    {
      method: "GET",
      path: "/v1/cms/faq-questions",
      handler: "api::faq-question.faq-question.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/v1/cms/faq-questions/:id",
      handler: "api::faq-question.faq-question.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/v1/cms/faq-questions",
      handler: "api::faq-question.faq-question.create",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/v1/cms/faq-questions/:id",
      handler: "api::faq-question.faq-question.update",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/v1/cms/faq-questions/:id",
      handler: "api::faq-question.faq-question.delete",
      config: {
        auth: false,
      },
    },
  ],
};

