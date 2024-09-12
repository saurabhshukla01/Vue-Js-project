<template>
  <div id="app">
    <h2>From with checkbox radio button in Vue.js</h2>
    <SingUp/>
  </div>
</template>

<script>
import SingUp from './components/Signup.vue';
export default {
  name: 'App',
  components: {
    SingUp,
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
