<template>
  <div id="app">
    <h2>Pass data in routing params | Vue router part 3</h2>
    <!-- Router link based on href like wise in vue js i am use router-link -->
    <ul>
      <ol><router-link to="/">Home</router-link></ol>
      <ol><router-link to="/about">About</router-link></ol>
      <ol><router-link to="/login">Login</router-link></ol>
      <ol><router-link to="/user/:id">User View</router-link></ol>
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
