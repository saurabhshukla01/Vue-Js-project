<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name:"LoginPage",
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['login']),
      login() {
        this.login({ email: this.email, password: this.password }).then(() => {
          this.$router.push('/');
        });
      }
    }
  };
  </script>
  