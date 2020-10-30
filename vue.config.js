const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  outputDir: path.resolve(__dirname, "./dist"),
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // изменение конфигурации для production...
    } else {
      // изменения для разработки...

    }
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: require('./aliases.config.js').webpack
  //   }
  // },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/sass/app.sass"',
      }
    },
    sourceMap: true
  },

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    },
  }
  /*
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
   */,

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
     config.resolve.alias
         .set("@img", path.resolve(__dirname, "./src/assets/img"));
  },
   publicPath: '/',
   // outputDir: 'assets',
   assetsDir: 'assets'
}
