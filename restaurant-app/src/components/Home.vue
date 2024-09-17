<template>
    <div>
      <h2>Home Page</h2>
      <p v-if="user">Logged in as: {{ user.username }}</p>
      <router-link to="/add-restaurant">Add Restaurant</router-link>
      <router-link to="/login" v-if="!user">Login</router-link>
      <button @click="logout" v-if="user">Logout</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name:"HomePage",
    computed: {
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['logout'])
    }
  };
  </script>
  