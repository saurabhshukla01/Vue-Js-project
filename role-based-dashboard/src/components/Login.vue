<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login" class="login-form">
        <input v-model="email" type="email" placeholder="Email" required :class="{ 'is-invalid': emailError }" />
        <span v-if="emailError" class="error-message">{{ emailError }}</span>

        <input v-model="password" type="password" placeholder="Password" required
          :class="{ 'is-invalid': passwordError }" />
        <span v-if="passwordError" class="error-message">{{ passwordError }}</span>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>

        <!-- Error message displayed when login fails -->
        <p v-if="loginError" class="error-message">{{ loginError }}</p>
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
      password: '',
      emailError: '',
      passwordError: '',
      loginError: '', // For custom login error messages
      loading: false
    };
  },
  methods: {
    validateForm() {
      // Reset errors
      this.emailError = '';
      this.passwordError = '';
      let valid = true;

      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email || !emailPattern.test(this.email)) {
        this.emailError = 'Please enter a valid email address.';
        valid = false;
      }

      // Password length validation
      if (!this.password || this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters long.';
        valid = false;
      }

      return valid;
    },
    async login() {
      if (!this.validateForm()) return;

      this.loading = true;
      this.loginError = ''; // Reset login error before attempting

      try {
        // Dispatch the login action and get the response
        const response = await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        });
        // Check if the response has the success flag
        if (response && response.success) {
          // Store token and user info in sessionStorage
          sessionStorage.setItem('token', response.data.token); // Assuming the token is in the response
          sessionStorage.setItem('user', JSON.stringify({
            name: response.data.name,
            email: response.data.email,
            role: response.data.role
          }));   // Assuming user info is in the response
          // Redirect to the dashboard
          this.$router.push('/dashboard');
        } else {
          // Show custom error message when success is false
          this.loginError = 'Login failed. Username or password is incorrect.';
        }
      } catch (error) {
        // Handle login error and display custom error message
        this.loginError = 'Login failed. Please check your credentials and try again.';
      } finally {
        this.loading = false; // Reset loading state
      }
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
  max-width: 400px;
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
  transition: border-color 0.3s;
}

input.is-invalid {
  border-color: red;
}

button {
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 0.875em;
  margin-bottom: 10px;
}
</style>
