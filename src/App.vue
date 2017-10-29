<template>
  <div>
    <ul>
      <li v-for="item in myList">{{ item.name }}</li>
      {{ myVal }}
      <p v-css>hello world</p>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import ComA from './components/a'
import ComB from './components/b'
export default {
  components: {
    Vue, ComA, ComB
  },
  directives: {
    css: {
      inserted (el, bind) {
        let styleObj = bind.value
        let arr = []
        for (let key in styleObj) {
          arr.push(key + ':' + styleObj[key])
        }
        arr = arr.join(';')

        el.style.cssText = arr
      }
    }
  },
  data () {
    return {
      hello: 'world',
      show: true
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
