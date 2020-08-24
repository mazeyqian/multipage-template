const { entryList, _resolve, pageList } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

const baseConf = {
  entry: entryList(),
  output: _resolve('../dist'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: _resolve('../src')
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    ...pageList(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name]/[chunkhash].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': _resolve('../src')
    }
  }
};

module.exports = baseConf;
