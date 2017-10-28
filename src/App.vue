<template>
  <div>
    {{ myVal }}
    <v-select :options="options"></v-select>
  </div>
</template>

<script>
import Vue from 'vue'
import comA from './components/a'
import vSelect from './components/vSelect'
export default {
  components: {
    comA,
    vSelect
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
