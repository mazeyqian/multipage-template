<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <div class="ab">
      <transition name="fade">
        <p v-show="show">i am show</p>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ComA from './components/a'
export default {
  components: {
    Vue, ComA
  },
  data () {
    return {
      hello: 'world',
      show: true
    }
  }
}
</script>

<style>
html {
  height:100%;
}
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-out;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
