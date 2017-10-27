<template>
  <div>
    <ul>
      <li v-for="item in list.filter((v, i) =>  i > 0)"> {{ item.name }} - {{ item.price }}</li>
    </ul>
    <a class="link-href" v-bind:class="className">to baidu</a>
    <button v-on:click="addItem">addItem</button>
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
