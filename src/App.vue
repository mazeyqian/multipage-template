<template>
  <div>
    {{ myVal }}
    <select v-model="myVal">
      <option v-for="item in options" :value="item.val">{{ item.name }}</option>
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
      options: [
        {
          name: 'apple',
          val: 0
        },
        {
          name: 'banana',
          val: 1
        },
        {
          name: 'orange',
          val: 2
        }
      ],
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
