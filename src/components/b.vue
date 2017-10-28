<template>
  <div>
    {{ hello }}
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
        hello: 'i am component b'
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
