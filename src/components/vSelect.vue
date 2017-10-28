<template>
  <div>
    <div>{{ selected }}</div>
    <div class="select">
      <div class="option"
           v-for="item in options"
           :value="item.val"
            @click="onChange">{{ item.name }}</div>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      'options': [Array]
    },
    data () {
      return {
        select: this.options[0].val
      }
    }
  }
</script>

<style></style>
