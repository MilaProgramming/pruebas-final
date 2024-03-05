module.exports = {
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 5000,

  e2e: {
    baseUrl: 'http://localhost:3000', // URL para tus pruebas de extremo a extremo
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
};
