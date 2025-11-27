/**
 * page router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/pages',
      handler: 'api::page.page.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/:id',
      handler: 'api::page.page.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/pages',
      handler: 'api::page.page.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/pages/:id',
      handler: 'api::page.page.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/pages/:id',
      handler: 'api::page.page.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/path/:path*',
      handler: 'api::page.page.findByPath',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/:id/breadcrumbs',
      handler: 'api::page.page.breadcrumbs',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/available-parents',
      handler: 'api::page.page.availableParents',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/:id/available-parents',
      handler: 'api::page.page.availableParents',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/available-children',
      handler: 'api::page.page.availableChildren',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/:id/available-children',
      handler: 'api::page.page.availableChildren',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

