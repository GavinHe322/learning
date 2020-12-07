<template>
  <div class="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      msg: 'Hello, Webpack'
    }
  }
})
</script>

<style scoped>
.app {
  color: skyblue;
}

h1 {
  color: skyblue;
}
</style>
