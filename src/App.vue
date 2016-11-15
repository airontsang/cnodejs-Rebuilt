<template>
  <div id="app">
    <head-er></head-er>
    <router-view></router-view>
  </div>

</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    'head-er': Header
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
body {
  background-color: #e1e1e1;
}
li {
  list-style: none;
}
#app {
  font-family: Source Sans Pro, Helvetica, Microsoft YaHei UI, sans-serif;
  font-size: 1em;
}
</style>
