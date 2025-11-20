/**
 * faq-topic router.
 */

export default {
  routes: [
    {
      method: "GET",
      path: "/v1/cms/faq-topics",
      handler: "api::faq-topic.faq-topic.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/v1/cms/faq-topics/:id",
      handler: "api::faq-topic.faq-topic.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/v1/cms/faq-topics",
      handler: "api::faq-topic.faq-topic.create",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/v1/cms/faq-topics/:id",
      handler: "api::faq-topic.faq-topic.update",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/v1/cms/faq-topics/:id",
      handler: "api::faq-topic.faq-topic.delete",
      config: {
        auth: false,
      },
    },
  ],
};
