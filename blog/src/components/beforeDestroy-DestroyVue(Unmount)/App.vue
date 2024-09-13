<template>
  <div id="app">
    <h2>beforeDestroy and destroyed life cycle methods</h2>
    <div v-if="display">
      <Home/>
    </div>
    <button @click="toggle">Toggle</button>
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
    return {display:true};
  },
  methods:{
    toggle(){
      this.display=!this.display;
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
