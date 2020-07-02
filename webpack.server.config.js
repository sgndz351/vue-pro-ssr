var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
var NodemonPlugin = require('nodemon-webpack-plugin')
var TerserPlugin = require('terser-webpack-plugin')

var webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: './src/entry-server.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new NodemonPlugin(),
    new webpack.DefinePlugin({
      'process.env': 'production'
    }),
    new TerserPlugin()
  ]
})
module.exports = webpackConfig