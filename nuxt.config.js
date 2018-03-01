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
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Muli:300,400,600,700|Material+Icons' },
    ],
    script: [
      { src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js' },
    ]
  },

  // Manifest JSON
  manifest: {
    theme_color: '#3B8070'
  },

  // Plugins import
  plugins: [
    '@/plugins/vuetify',
  ],
  
  // Progressive web app module
  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
  ],

  // Service workers offline mode
  workbox: {
    // Workbox options
  },

  // Onesignal options
  oneSignal: {
    init: {
      appId: '4688e9e6-560f-4d39-994e-8afa61051151',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
          disable: true
      }
    }
  },

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
