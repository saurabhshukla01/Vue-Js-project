<template>
  <div id="app">
    <h2>Props in Vue.js</h2>
    <!-- Bind the first user's name to the Child component -->
    <Child v-bind:name="users[0].name" />
    <!-- If you want to loop through all users -->
    <div v-for="(user, index) in users" :key="index">
      <Child v-bind:name="user" />
    </div>
  </div>
</template>

<script>
import Child from './components/Child.vue';

export default {
  name: 'App',
  components: {
    Child,
  },
  data() {
    return {
      users: [
        { name: 'Anil' ,email:"anil@gmail.com" },
        { name: 'Mukesh' , email:"mukesh@gmail.com"},
      ],
    };
  },
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
