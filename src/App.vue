<template>
  <div id="app">
    <PublishMessage />
    <HandleMessage />
  </div>
</template>

<script>
import PublishMessage from './components/PublishMessage.vue'
import HandleMessage from './components/HandleMessage.vue';

export default {
  name: 'App',
  components: {
    PublishMessage,
    HandleMessage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
