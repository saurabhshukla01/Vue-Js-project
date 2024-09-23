<template>
  <div id="app">
    <nav>
      <ul>
        <!-- Show Login and Register links when the user is not logged in -->
        <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>

        <!-- Show Dashboard and User List when the user is logged in -->
        <li v-if="isLoggedIn"><router-link to="/dashboard">Dashboard</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/users">User List</router-link></li>
        
        <!-- Logout button, visible only if logged in -->
        <li v-if="isLoggedIn"><button @click="logout">Logout</button></li>
      </ul>
    </nav>
    <!-- Router View to display the routed components -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false // Track login status
    };
  },
  created() {
    this.checkLoginStatus(); // Check login status when component is created
  },
  methods: {
    checkLoginStatus() {
      // Check if token exists in sessionStorage
      const token = sessionStorage.getItem('token');
      this.isLoggedIn = !!token; // Set isLoggedIn to true if token exists
    },
    logout() {
      // Clear the session storage (log out the user)
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');

      // Update the login status
      this.isLoggedIn = false;

      // Redirect to the login page
      this.$router.push('/login');
    }
  },
  watch: {
    // Watch for route changes to update the login status
    $route() {
      this.checkLoginStatus();
    }
  }
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
