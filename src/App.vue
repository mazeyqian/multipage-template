<template>
  <div>
    <input type="text" v-model.number="myValue">
    <com-a :my-value="myValue" @my-event="getMyEvent">
      <p>123</p>
    </com-a>
    <!--父组件监听子组件的my-event触发父组件的事件。-->
    <!--监听的事件my-event不支持驼峰，统一用连接线。-->
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
