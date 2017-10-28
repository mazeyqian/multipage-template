<template>
  <div>
    <input type="text" v-model="myValue">
    {{ getMyValWithoutNum() }}
    <!--watch可以用来监听操作，只要与某个值相关的操作都可以通知用户-->
  </div>
</template>

<script>
export default {
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
