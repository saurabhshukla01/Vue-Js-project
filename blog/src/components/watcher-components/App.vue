<template>
  <div id="app">
    <h2>Watchers Components</h2>
    <!-- Corrected component usage -->
    <WatchersComponents />
  </div>
</template>

<script>
// Correct import for renamed component
import WatchersComponents from './components/watchersComponents.vue';

export default {
  name: 'App',
  components: {
    WatchersComponents // Registered as ComputedComponent
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
