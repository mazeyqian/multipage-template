// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
let mazey = new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})

Vue.use({
  mazey
})

Vue.directive('css', {
  insert (el, bind) {
    console.log(`inserted`)
    // let styleObj = bind.value
    // let arr = []
    // for (let key in styleObj) {
    //   arr.push(key + ':' + styleObj[key])
    // }
    // arr = arr.join(';')
    //
    // el.style.cssText = arr
  },
  bind (el, bind) {
    console.log(`bind`)
    // let styleObj = bind.value
    // let arr = []
    // for (let key in styleObj) {
    //   arr.push(key + ':' + styleObj[key])
    // }
    // arr = arr.join(';')
    //
    // el.style.cssText = arr
  }
})

/*
* 安装插件
* cnpm install vue-router --save
* 引用
* import VueRouter from 'vue-router'
* 等于
* var VueRouter = require('vue-router')
* 使用方法
* Vue.use(VueRouter)
* 实例化 有些插件不用实例化 例如：VueResource
* let router = new VueRouter()
* 以参数的形式写到根选项里与el methods平级
* */
