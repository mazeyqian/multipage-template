<template>
  <div>
    <ul>
      <li v-for="(item, index) in list"> {{ item.name }} - {{ item.price }} - {{ index }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: '<strong>world</strong>',
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
  }
}
</script>

<style>
html {
  height:100%;
}
</style>
