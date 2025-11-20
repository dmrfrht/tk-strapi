/**
 * faq-topic router.
 */

export default {
  routes: [
    {
      method: "GET",
      path: "/faq-topics",
      handler: "api::faq-topic.faq-topic.find",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/faq-topics/:id",
      handler: "api::faq-topic.faq-topic.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/faq-topics",
      handler: "api::faq-topic.faq-topic.create",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/faq-topics/:id",
      handler: "api::faq-topic.faq-topic.update",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/faq-topics/:id",
      handler: "api::faq-topic.faq-topic.delete",
      config: {
        auth: false,
      },
    },
  ],
};
