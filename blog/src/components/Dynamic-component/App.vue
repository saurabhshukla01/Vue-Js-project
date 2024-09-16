<template>
  <div id="app">
    <h2>Dynamic Component</h2>
    <!-- Corrected component usage -->
    <button @click="tag='Php'">Load PHP</button>
    <button @click="tag='Java'">Load Java</button>
    <button @click="tag='Node'">Load Node</button>
    <component :is="tag"></component>
    <!-- <Php />
    <Java />
    <Node /> -->
  </div>
</template>

<script>
// Correct import for renamed component
import Php from './components/Php.vue';
import Java from './components/Java.vue';
import Node from './components/Node.vue';

export default {
  name: 'App',
  components: {
    Php,Java,Node // Registered as dynamic component
  },
  data(){
    return {tag:"Java"}
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
