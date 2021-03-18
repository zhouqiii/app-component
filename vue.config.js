
module.exports = {
  lintOnSave: true,

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080',//服务器地址
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/public/mock'
  //       }
  //     }
  //   }
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
