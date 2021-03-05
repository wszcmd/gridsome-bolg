// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: '@gridsome/source-strapi',
    options: {
      apiURL: 'http://47.96.94.154:8222/',
      queryLimit: 1000, // Defaults to 100
      contentTypes: ['star','tag'],//后面在strapi上建的集合
      //singleTypes: ['impressum'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      loginData: {
        identifier: '',
        password: ''
      }
    }
  }],
  templates: {
    StrapiStar: [
      {
        path: '/star/:id',
        component: './src/templates/Star.vue'
      }
    ]
  }
}
