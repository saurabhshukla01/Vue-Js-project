<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login" class="login-form">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/dashboard');
      }).catch(() => {
        alert('Login failed');
      });
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

h1 {
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  max-width: 400px; /* Adjust as needed */
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
