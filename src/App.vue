<template>
  <div>
    <ul>
      <li v-for="value in objList"> {{ value }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: '<strong>world</strong>',
      objList: {
        name: 'apple',
        price: 34,
        color: 'red',
        weight: 14
      }
    }
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
