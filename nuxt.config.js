import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#9CCC65', height: '10px' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    { src: '~/assets/theme.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-material' },
    { src: '~/plugins/axios' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    credentials: true,
    proxy: true
  },

  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBXnH8lCdxcSNudLYNlGrXLoxz6i8bobfU",
      pathRewrite: { "^/register/": "" }
    }
  },

  env: {
    NEWS_API_KEY: "fb82e072f7d54c0b970c3f99334f7263"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
