<template>
  <div>
    <ul>
      <li v-for="item in list.filter((v, i) =>  i > 0)"> {{ item.name }} - {{ item.price }}</li>
    </ul>
    {{ myVal }}
    <select v-model="myVal">
      <option value="0">apple</option>
      <option value="1">banana</option>
      <option value="2">orange</option>
    </select>
  </div>
</template>

<script>
import Vue from 'vue'
import comA from './components/a'
export default {
  components: {
    comA
  },
  data () {
    return {
      hello: 'world',
      myVal: 0,
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
    },
    onKeyDown () {
      console.log('on key down')
    },
    onComaMyEvent (parmfromA) {
      console.log('onComaMyEvent+' + parmfromA)
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
