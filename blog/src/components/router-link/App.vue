<template>
  <div id="app">
    <h2>Vue Router how to handle</h2>
    <!-- Router link based on href like wise in vue js i am use router-link -->
    <ul>
      <ol><router-link to="/">Home</router-link></ol>
      <ol><router-link to="/about">About</router-link></ol>
    </ul>
    
    <!-- this is add for link based component load then use router-view open and close both -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
