// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

var myHeaderChild = {
  template: '<p>i am my header child </p>'
}

var myHeader = {
  template: '<p><my-header-child></my-header-child>this {{}} is my header</p>',
  components: {
    'my-header-child': myHeaderChild
  },
  data: function () {
    return {
      f: 1,
      d: 2
    }
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    word: 'hello world2'
  },
  components: {
    'my-header': myHeader
  }
})
