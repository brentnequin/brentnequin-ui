export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brent Nequin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Hi, my name is Brent.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [ // Global CSS: https://go.nuxtjs.dev/config-css
  ],

  plugins: [ // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  ],

  components: true, // Auto import components: https://go.nuxtjs.dev/config-components

  buildModules: [ // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/fontawesome',
    // '@nuxtjs/color-mode', // https://v2.color-mode.nuxtjs.org/
  ],


  modules: [ // Modules: https://go.nuxtjs.dev/config-modules
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxt/content',
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism.css'
      } 
    } 
  },

  axios: { // Axios module configuration: https://go.nuxtjs.dev/config-axios
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:5000',
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  tailwindcss: {
    cssPath: './assets/css/tailwind.css',
    configPath: './tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
      regular: true
    }
  },

  // colorMode: {
  //   // preference: 'system', // default value of $colorMode.preference
  //   // fallback: 'light', // fallback value if not system preference found
  //   // hid: 'nuxt-color-mode-script',
  //   // globalName: '__NUXT_COLOR_MODE__',
  //   // componentName: 'ColorScheme',
  //   // classPrefix: '',
  //   classSuffix: '',
  //   // storageKey: 'nuxt-color-mode'
  // },

  // purgeCSS: {
  //   whitelist: ['dark'],
  // },

  build: { // Build Configuration: https://go.nuxtjs.dev/config-build
  },
}
