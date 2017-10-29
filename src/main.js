// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
let mazey = new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  },
  directives: {
    css: {
      insert (el, bind) {
        let styleObj = bind.value
        let arr = []
        for (let key in styleObj) {
          arr.push(key + ':' + styleObj[key])
        }
        arr = arr.join(';')

        el.style.cssText = arr
      }
    }
  }
})

Vue.use({
  mazey
})
