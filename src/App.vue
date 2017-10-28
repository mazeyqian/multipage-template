<template>
  <div>
    <button @click="toggleCom">Toggle</button>
    <div class="ab">
      <transition name="fade">
        <div :is="currentView"></div>
        <!--<p v-if="show">i am show</p>-->
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
