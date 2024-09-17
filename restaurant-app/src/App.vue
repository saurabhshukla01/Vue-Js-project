<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/add-restaurant" v-if="user">Add Restaurant</router-link>
      <router-link to="/login" v-if="!user">Login</router-link>
      <router-link to="/create-user" v-if="!user">Create User</router-link>
      <button @click="logout" v-if="user">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name:"App",
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['logout'])
  }
};
</script>
