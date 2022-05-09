module.exports = {
  port: 3090,
  proxy: [
    {
      context: ['/mall'],
      target: 'https://supply-test19.brightoilonline.com',
      changeOrigin: true,
      secure: false
    },
    {
      context: ['/api'],
      target: 'https://newmid-test14.brightoilonline.com',
      changeOrigin: true,
      secure: false,
      // pathRewrite: { '^/api': '/' }
    }
  ],
  name: 'App',
  version: '1.0.0',
  app: {},
  env: {
    dev: {
      APP_NODE_ENV: 'dev',
      PUBLIC_PATH: '/',
      BASE_URL: '/'
    },
    prod: {
      APP_NODE_ENV: 'prod',
      PUBLIC_PATH: '/',
      BASE_URL: '/'
    },
    sit: {
      APP_NODE_ENV: 'sit',
      PUBLIC_PATH: '/',
      BASE_URL: '/'
    },
    uat: {
      APP_NODE_ENV: 'uat',
      PUBLIC_PATH: '/',
      BASE_URL: '/'
    }
  }
}
