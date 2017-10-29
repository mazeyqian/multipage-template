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
* 单文件组件
* <style scoped 代表局部的，只在这个组件内有效，否则是全局的，父组件也会接收样式。
*
* */
