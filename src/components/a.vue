<template>
  <div>
    {{ hello }}
    {{ number }}
    <button @click="emitMyEvent">emit</button>
  </div>
</template>

<script>
  export default {
    props: ['number'],
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
