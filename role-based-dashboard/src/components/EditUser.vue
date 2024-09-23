<template>
  <div class="update-user-page">
    <div class="update-user-container">
      <h1>Edit User</h1>
      <form @submit.prevent="handleUpdateUser" class="update-user-form">
        <input v-model="name" type="text" placeholder="Name" required />
        <input v-model="email" type="email" placeholder="Email" required readonly />
        <select v-model="role_id" required>
          <option disabled value="">Select Role</option>
          <option v-for="role in roles" :key="role.id" :value="role.id">
            {{ role.name }}
          </option>
        </select>
        <button type="submit">Update User</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      name: '',
      email: '',
      role_id: null, // role_id will be selected in the dropdown
      roles: [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'Manager' },
        { id: 3, name: 'HR' },
        { id: 4, name: 'Employee' }
      ], // Available roles
      error: null,
    };
  },
  computed: {
    ...mapState({
      user: state => state.user,
      error: state => state.error,
    }),
  },
  methods: {
    ...mapActions(['fetchUserById', 'updateUser']),
    async loadUser() {
      try {
        const userId = this.$route.params.id;
        const user = await this.fetchUserById(userId);
        this.name = user.name;
        this.email = user.email;
        this.role_id = user.role.id;
      } catch (error) {
        this.error = 'Failed to load user data';
        console.error(error);
      }
    },
    async handleUpdateUser() {
      const userId = this.$route.params.id;
      const updatedUserData = {
        name: this.name,
        email: this.email,
        role_id: this.role_id,
      };

      try {
        await this.updateUser({ userId, userData: updatedUserData });
        // Redirect after successful update
        this.$router.push('/users');
      } catch (error) {
        this.error = error.message || 'Failed to update user';
        console.error(error);
      }
    },
  },
  mounted() {
    this.loadUser();
  },
};
</script>

<style scoped>
.update-user-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.update-user-container {
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

.update-user-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input,
select {
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
