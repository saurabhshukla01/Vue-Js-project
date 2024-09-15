<template>
  <div id="app">
    <h2>Non Props Data</h2>
    <!-- Corrected component usage -->
    <SignIn />
  </div>
</template>

<script>
// Correct import for renamed component
import SignIn from './components/SignIn.vue';

export default {
  name: 'App',
  components: {
    SignIn // Registered as SignIn
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
