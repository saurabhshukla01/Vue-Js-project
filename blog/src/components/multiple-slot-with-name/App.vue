<template>
    <div id="app">
      <h2>Multiple Slots Components with name in Vue Js</h2>
      <!-- Corrected component usage -->
      <SlotsComponent />
    </div>
  </template>
  
  <script>
  // Correct import for renamed component
  import SlotsComponent from './components/SlotsComponent.vue';
  
  export default {
    name: 'App',
    components: {
      SlotsComponent // Registered as ComputedComponent
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
  