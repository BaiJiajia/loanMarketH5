const vuxLoader = require('vux-loader')
module.exports = {
  configureWebpack: config => {
      vuxLoader.merge(config, {
          plugins: ['vux-ui', {
                name: 'less-theme',
                path: 'src/assets/style/theme.less' 
          }], 
      })
  },
//   baseUrl:'./',
  devServer:{
        proxy:{
              '/api':{
                    target:'http://192.168.1.108:9090/api',
                    changeOrigin:true,
                    ws:true,
                    pathRewrite:{
                          '^/api':''
                    }
              }
        }
  }
}