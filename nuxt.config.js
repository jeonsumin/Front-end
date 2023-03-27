export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front-end',
    meta: [
      {charset: 'utf-8'},
      {
        hid: "viewport",
        name: "viewport",
        content: "user-scalable=no,viewport-fit=auto,initial-scale=1,minimum-scale=1,maximum-scale=1,width=device-width,target-densitydpi=device-dpi"
      },
      {hid: 'description', name: 'description', content: 'front-end'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //Env Settings
    "@/plugins/env",
    //Axios Instance Configuration
    "@/plugins/axios.js",

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://github.com/nuxt-community/style-resources-module#readme
    "@nuxtjs/style-resources",
    // https://github.com/nuxt-community/device-module
    "@nuxtjs/device",
    // https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt#readme
    "cookie-universal-nuxt",
    // https://github.com/nuxt-community/gtm-module
    "@nuxtjs/gtm"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // proxy: process.env.NODE_ENV !== "production",
    proxy: true,
    baseURL: process.env.API_URL || "http://localhost:3000",
    browserBaseURL: process.env.SITE_URL || "http://localhost:3000",
  },

  // Environment Configuration (https://ko.nuxtjs.org/docs/2.x/configuration-glossary/configuration-env)
  env: {
    debug: process.env.DEBUG || false,
    siteUrl: process.env.SITE_URL || "http://localhost:3000",
    cdnUrl: process.env.CDN_URL || "http://localhost:3000",
    kakaoApiKey: process.env.KAKAO_API_KEY || "",
    IS_LIVE: process.env.IS_LIVE,
  },

}
