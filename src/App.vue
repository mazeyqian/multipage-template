<template>
  <div>
    <ul>
      <li v-for="item in list.filter((v, i) =>  i > 0)"> {{ item.name }} - {{ item.price }}</li>
    </ul>
    <button v-on:click="addItem">addItem</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
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
  methods: {
    addItem () {
      Vue.set(this.list, 1, {
        name: 'pinaapple',
        price: 256
      })
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
