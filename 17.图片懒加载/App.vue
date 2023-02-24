<template>
  <div class="app">
    <div v-for="i in [1,2,3,4,5]" :key="i">
      <img v-lazy='imgUrl' :alt="i">
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const imgUrl = 	'./assets/logo.png'
    return {
      imgUrl
    }
  },

}
</script>

<style>
img{
  display: block;
}
</style>


