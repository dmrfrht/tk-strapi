/**
 * Approval Routes
 */

export default {
  routes: [
    {
      method: 'POST',
      path: '/approval/submit/:contentType/:id',
      handler: 'approval.submit',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/approval/approve/:contentType/:id',
      handler: 'approval.approve',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/approval/reject/:contentType/:id',
      handler: 'approval.reject',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/approval/pending',
      handler: 'approval.getPending',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

