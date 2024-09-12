<template>
  <div id="app">
    <h2>Life Cycle method in Vue.js</h2>
    <Child />
  </div>
</template>

<script>
import Child from './components/Child.vue';
export default {
  name: 'App',
  components: {
    Child,
  }
};
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
