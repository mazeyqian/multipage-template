<template>
  <div>
    <input type="text" v-model.number="myValue">
    <keep-alive>
      <p :is="currentView"></p>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'
import ComA from './components/a'
export default {
  components: {
    Vue, ComA
  },
  data () {
    return {
      currentView: 'com-a',
      comToRender: 'com-a',
      myValue: '',
      hello: '<strong>world</strong>',
      list: [
        {
          name: 'apple',
          price: 34
        },
        {
          name: 'banana',
          price: 56
        }
      ]
    }
  },
  computed: {
    myValueWithoutNum: function () {
      // 区别
      return this.myValue.replace(/\d/g, '')
    }
  },
  methods: {
    getMyValWithoutNum () {
      return this.myValue.replace(/\d/g, '')
    },
    getMyEvent (str) {
      console.log(str)
    }
  },
  watch: {
    myValue: function (val, oldVal) {
      console.log(val, oldVal)
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
