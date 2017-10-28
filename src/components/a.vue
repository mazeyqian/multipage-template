<template>
  <div>
    {{ hello }}
    {{ myValue }}
    <button @click="emitMyEvent">emit</button>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      'number-to-do': [Number, String, Object],
      'my-value': [Number, String]
    },
    data () {
      return {
        hello: 'i am component a'
      }
    },
    methods: {
      emitMyEvent () {
        this.$emit('my-event', this.hello)
      }
    }
  }
</script>

<style>

</style>
