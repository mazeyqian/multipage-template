<template>
  <div>
    <p v-text="hello"></p>
    <p v-html="hello"></p>
    {{ status ? 'success' : 'false' }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: '<strong>world</strong>',
      num: 1,
      status: true
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
