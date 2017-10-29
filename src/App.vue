<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <div class="ab">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false">
        <p v-show="show" class="animate-p">i am show</p>
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
    },
    beforeEnter (el) {
      $(el).css({
        left: '-500px',
        opacity: 0
      })
    },
    enter () {
      $(el).animate({
        left: 0,
        opacity: 1
      }, {
        duration: 1500,
        complete: done
        })
    },
    leave (el, done) {
      $(el).animate({
        left: '500px',
        opacity: 0
      }, {
        duration: 1500,
        complete: done
      })
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
.animate-p{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
