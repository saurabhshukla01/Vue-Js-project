<template>
    <div>
      <h2>Create User</h2>
      <form @submit.prevent="createUser">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['register']),
      createUser() {
        this.register({ username: this.username, email: this.email, password: this.password }).then(() => {
          this.$router.push('/');
        });
      }
    }
  };
  </script>
  