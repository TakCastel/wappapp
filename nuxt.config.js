module.exports = {
  // Head tag of the page
  head: {
    title: 'wappapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
    ]
  },

  // Plugins import
  plugins: [
    '@/plugins/vuetify',
  ],
  
  // Progressive web app module
  modules: [
    // '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
  ],

  // oneSignal: {
  //   init: {
  //     appId: 'YOUR_APP_ID',
  //     allowLocalhostAsSecureOrigin: true,
  //     welcomeNotification: {
  //         disable: true
  //     }
  //   }
  // },

  // Customize progress bar
  loading: { color: '#3B8070' },

  // Router configuration
  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'podcast',
        path: '/podcast',
        component: 'pages/podcast.vue'
      },
    ]
  },
  
  // Build configuration
  build: {

    // Run ESLint on save
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
