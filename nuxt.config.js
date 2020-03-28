const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all')
const path = require('path')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Eventix - %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Eventix Webflow Ecommerce Website Template' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Exo:400,600,800&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '~modules/import-tailwind-config'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost:3000/api'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {
      config.plugins.push(
        new PurgecssPlugin({
          whitelist: ['html', 'body'],
          paths: glob.sync([
            path.join(__dirname, 'components/**/*.vue'),
            path.join(__dirname, 'layouts/**/*.vue'),
            path.join(__dirname, 'pages/**/*.vue')
          ]),
          extractors: [{
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'vue']
          }]
        })
      )
    }
  },
  router: {
    middleware: ['closeSideNav']
  },
}
