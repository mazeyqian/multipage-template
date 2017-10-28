<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <div class="ab">
      <transition name="fade" mode="">
        <!--<div :is="currentView"></div>-->
        <!--<p v-if="show">i am show</p>-->
        <p v-if="show" key="0">i am show</p>
        <p v-else key="1"> not in show</p>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ComA from './components/a'
import ComB from './components/b'
export default {
  components: {
    Vue, ComA, ComB
  },
  data () {
    return {
      hello: 'world',
      show: true,
      currentView: 'com-a'
    }
  },
  methods: {
    toggleCom () {
      this.currentView = this.currentView === 'com-a' ? 'com-b' : 'com-a'
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
