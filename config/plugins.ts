export default () => ({
  i18n: {
    enabled: true,
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      landingPage: true, // GraphQL Playground'u aktif eder (geliştirme için)
      depthLimit: 7,
      amountLimit: 100,
      defaultLimit: 25,
      maxLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
