// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: { NODE_ENV: '"production"' },
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: { NODE_ENV: '"development"'},
    port: 8082,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
