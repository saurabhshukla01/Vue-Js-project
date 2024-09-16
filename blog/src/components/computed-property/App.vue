<template>
  <div id="app">
    <h2>Computed Property</h2>
    <!-- Corrected component usage -->
    <ComputedComponent />
  </div>
</template>

<script>
// Correct import for renamed component
import ComputedComponent from './components/computedComponent.vue';

export default {
  name: 'App',
  components: {
    ComputedComponent // Registered as ComputedComponent
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
