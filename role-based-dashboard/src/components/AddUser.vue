<template>
  <div class="add-user-page">
    <div class="add-user-container">
      <h1>Add User</h1>
      <form @submit.prevent="addUser" class="add-user-form">
        <input v-model="name" type="text" placeholder="Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <input v-model="c_password" type="password" placeholder="Confirm Password" required />
        <select v-model="role_id" required>
          <option disabled value="">Select Role</option>
          <option value="1">Admin</option>
          <option value="2">Manager</option>
          <option value="3">HR</option>
          <option value="4">Employee</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      c_password: '',
      role_id: null
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch('addUser', {
        name: this.name,
        email: this.email,
        password: this.password,
        c_password: this.c_password,
        role_id: this.role_id
      }).then(() => {
        this.$router.push('/users');
      });
    }
  }
};
</script>
<style scoped>
.add-user-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.add-user-container {
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

.add-user-form {
  display: flex;
  flex-direction: column;
  max-width: 400px; /* Adjust as needed */
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input, select {
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
