const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConf = require('./webpack.base.config');
const prodConfig = require('./conf').build;
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const { assetsPath } = require('./utils');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prdConf = merge(baseConf, {
  output: {
    publicPath: '../',
    filename: assetsPath('[name]/[chunkhash].js')
  },
  devtool: prodConfig.devtoolType,
  plugins: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        ecma: 6,
        mangle: true
      },
      sourceMap: true
    }),
    new OptimizeCSSPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});

module.exports = prdConf;
