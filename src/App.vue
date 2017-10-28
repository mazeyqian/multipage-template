<template>
  <div>
    <p is="com-a"></p>
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
