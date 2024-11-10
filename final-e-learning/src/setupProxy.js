// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/jdoodle', // A local path to use as a proxy endpoint
    createProxyMiddleware({
      target: 'https://api.jdoodle.com',
      changeOrigin: true,
      pathRewrite: {
        '^/jdoodle': '', // Remove the `/jdoodle` path prefix when forwarding
      },
    })
  );
};
