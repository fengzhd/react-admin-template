const { createProxyMiddleware } = require('http-proxy-middleware')
console.log('环境变量', process.env.REACT_APP_BASE_URL)
debugger;
module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
    target: process.env.REACT_APP_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  }))
}