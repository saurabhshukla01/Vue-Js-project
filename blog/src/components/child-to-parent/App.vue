<template>
  <div id="app">
    <h2>Send Props Child to Parent in Vue.js</h2>
    <h5>{{title}}</h5>
    <Child v-on:changeTitle="updateTitle($event)" />
  </div>
</template>

<script>
import Child, {} from './components/Child.vue';
export default {
  name: 'App',
  components: {
    Child,
  },
  data() {
    return {
      title:"Props Title"
    };
  },
  methods:{
    updateTitle(title){
      this.title=title
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
