/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const base = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : '/'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tajam\'s Space',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Refer: https://fontawesome.com/icons?d=gallery&m=free
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        // Solid icons
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        // Brand icons
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** Serve configuration
  */
  server: {
    port: 22222, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /**
   * Render configuration
   */
  render: {
    static: {
      prefix: true
    }
  },
  router: {
    base
  }
}
