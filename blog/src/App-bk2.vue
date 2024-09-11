<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Home /> -->
     <DataBind />
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import DataBind from './components/Data-binding/DataBind.vue'
export default {
  name: 'App',
  components: {
    // Home,
    DataBind
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
