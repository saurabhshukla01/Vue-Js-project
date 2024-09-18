<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/users">User List</router-link></li>
      </ul>
    </nav>
    <!-- Router View to display the routed components -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Register from './components/Register.vue';
export default {
  name: 'App',
  components:{}
};
</script>

<style>
/* Add basic styling */
nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}
</style>
