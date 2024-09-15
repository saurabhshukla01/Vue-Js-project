<template>
  <div id="app">
    <h2>Directive Component</h2>
    <!-- Corrected component usage -->
    <DirectivePage />
  </div>
</template>

<script>
// Correct import for renamed component
import DirectivePage from './components/DirectivePage.vue';

export default {
  name: 'App',
  components: {
    DirectivePage // Registered as DirectivePage
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
