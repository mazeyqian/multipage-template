<template>
  <div>
    <ul>
      <li v-for="item in list.filter((v, i) =>  i > 0)"> {{ item.name }} - {{ item.price }}</li>
    </ul>
    {{ myVal }}
    <label><input type="radio" name="" value="1" v-model="myVal">apple</label>
    <label><input type="radio" name="" value="2" v-model="myVal">banana</label>
    <label><input type="radio" name="" value="3" v-model="myVal">orange</label>
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
      myVal: '',
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
