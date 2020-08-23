// node 路径模块
const path = require('path');
const fs = require('fs');
// 使用node.js 的文件操作模块来获取src文件夹下的文件夹名称 ->[about,common,home]
const entryFiles = fs.readdirSync(path.resolve(__dirname, './src/pages'));
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _resolve = (_path) => path.resolve(__dirname, _path);
console.log(entryFiles);

const entryList = (() => {
  const entryList = {};
  entryFiles.map((v) => {
    entryList[v] = _resolve(`../src/pages/${v}/index.js`);
  });
  return entryList;
})();

console.log(entryList);

const pageList = (() => {
  const pageList = [];
  entryFiles.map((v) => {
    pageList.push(
      new HtmlWebpackPlugin({
        template: _resolve(`../src/pages/${v}/index.html`),
        filename: _resolve(`../dist/${v}/index.html`),
        chunks: ['common', v],
        // 压缩配置
        minify: {
          // 删除Html注释
          removeComments: true,
          // 去除空格
          collapseWhitespace: true,
          // 去除属性引号
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      })
    );
  });
  return pageList;
})();

console.log(pageList);
