<template>
  <div id="app">
    <h2>Filters in Vue.js</h2>
    <p>{{$filters.capitalize(name)}}</p>
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
  },    
  data(){
    return {
        name:"Saurabh Shukla",
    }
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
