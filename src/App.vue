<template>
  <div>
    <componentA v-for="(value, key) in objList" :key="key"></componentA>
  </div>
</template>

<script>
import componentA from './components/a.vue'
export default {
  components: {
    componentA: componentA // es6 componentA
  },
  data () {
    return {
      hello: '<strong>world</strong>',
      objList: {
        name: 'apple',
        price: 34,
        color: 'red',
        weight: 14
      }
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
