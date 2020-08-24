const path = require('path');
const fs = require('fs');
const prodConfig = require('./conf').build;
let entryFiles = fs.readdirSync(path.resolve(__dirname, '../src/pages'));
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _resolve = (_path) => path.resolve(__dirname, _path);
const assetsPath = (_path) => path.posix.join(prodConfig.assetsPath, _path);

if (process.env.PAGE) {
  entryFiles = [process.env.PAGE];
}

console.log('更新的页面：', entryFiles);

module.exports = {
  _resolve,
  assetsPath,
  // 文件名 pages [ 'page1', 'page2' ]
  entryFiles,
  // webpack 入口 { page1: '~/src/pages/page1/index.js', page2: '~/src/pages/page2/index.js' }
  entryList: () => {
    const entryList = {};
    entryFiles.map((page) => {
      entryList[page] = _resolve(`../src/pages/${page}/index.js`);
    });
    return entryList;
  },
  // html页面 [HtmlWebpackPlugin {}]
  pageList: () => {
    const pageList = [];
    entryFiles.map((page) => {
      pageList.push(
        new HtmlWebpackPlugin({
          template: _resolve(`../src/pages/${page}/index.html`),
          filename: _resolve(`../dist/${page}/index.html`),
          chunks: ['common', page],
          // 压缩配置
          minify: {
            // 删除Html注释
            removeComments: true,
            // 去除空格
            collapseWhitespace: true,
            // 去除属性引号
            removeAttributeQuotes: true
          },
          chunksSortMode: 'auto'
        })
      );
    });
    return pageList;
  }
};
