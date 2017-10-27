<template>
  <div>
    <ul>
      <li v-for="item in list.filter((v, i) =>  i > 0)"> {{ item.name }} - {{ item.price }}</li>
    </ul>
    <a v-if="isPartA">partA</a>
    <a v-else>no data</a>
    <button @click="addItem">addItem</button>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      hello: 'world',
      link: 'http://www.baidu.com',
      dataA: 123,
      className: ['red-font', 'big-font'],
      classA: 'hello',
      classB: 'world',
      hasError: false,
      isPartA: true,
      linkCss: {
        'color': 'red',
        'font-size': '20px'
      },
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
      this.linkCss.color = 'blue'
    },
    toggle () {
      this.isPartA = !this.isPartA
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
