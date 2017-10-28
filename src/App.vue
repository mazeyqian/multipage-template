<template>
  <div>
    <input type="text" v-model="myValue">
    {{ myValueWithoutNum }}
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
      return this.myValue + ' end'
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
