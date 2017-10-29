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
  data () {
    return {
      myVal: 'world',
      show: true,
      myList: [
        {
          name: 'mazey'
        }
      ]
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
