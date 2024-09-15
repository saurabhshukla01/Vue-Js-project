<template>
  <div id="app">
    <h2>Dynamic Component</h2>
    <!-- when i am use dynamic component then not use this other way in next lines -->
    <!-- <signin />
    <signup /> -->
    <component v-bind:is="cmp"></component>
    <button @click="updatecmp('signin')">Load SignIn</button>
    <button @click="updatecmp('signup')">Load SignUp</button>
  </div>
</template>

<script>
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
export default {
  name: 'App',
  components: {
    'signin':SignIn,
    'signup':SignUp,
  },
  data(){
    return {cmp:null}
  },
  methods:{
    updatecmp(item){
      this.cmp = item;
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
