export default {
  routes: [
    {
      method: 'POST',
      path: '/v1/cms/translation/text',
      handler: 'api::translation.translation.translateText',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/v1/cms/translation/faq-question',
      handler: 'api::translation.translation.translateFaqQuestion',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/v1/cms/translation/faq-topic',
      handler: 'api::translation.translation.translateFaqTopic',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/v1/cms/translation/faq-section',
      handler: 'api::translation.translation.translateFaqSection',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/v1/cms/translation/faq-questions-by-topic',
      handler: 'api::translation.translation.translateFaqQuestionsByTopic',
      config: {
        auth: false,
      },
    },
  ],
};

