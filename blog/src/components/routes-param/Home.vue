<template>
  <div class="user-list-container">
    <h2>Home List</h2>
    <p><router-link to="user/1">Saurabh</router-link></p>
    <p><router-link to="user/2">Rishabh</router-link></p>
    <p><router-link to="user/3">Vimal</router-link></p>
    <p><router-link to="user/4">Mukesh</router-link></p>
  </div>
</template>

<script>
export default {
  name:"homePage",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>