<template>
  <div>
    <h1>Vue Lifecycle Hooks Multiple Data Example</h1>
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from './components/ParentComponent';
export default {
  name:'App',
  components:{
    ParentComponent,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
}
input {
  margin-bottom: 20px;
}
button {
  margin-top: 20px;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
