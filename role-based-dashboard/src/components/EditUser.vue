<template>
    <div>
      <h2>Edit User</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="user.name" required />
        </div>
  
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="user.email" required />
        </div>
  
        <div>
          <label for="role">Role</label>
          <select id="role" v-model="user.role" required>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="user">User</option>
          </select>
        </div>
  
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'EditUser',
    data() {
      return {
        user: {
          name: '',
          email: '',
          role: '',
        },
      };
    },
    computed: {
      // You can map vuex getters here if you need
      ...mapGetters(['getUserById']),
    },
    created() {
      const userId = this.$route.params.id;
      const user = this.getUserById(userId); // Fetch user data from vuex based on the ID from the route
      if (user) {
        this.user = { ...user }; // Set the user data to the form
      }
    },
    methods: {
      ...mapActions(['updateUser']),
      submitForm() {
        this.updateUser(this.user).then(() => {
          // Handle success - Redirect or show success message
          this.$router.push('/users');
        }).catch(err => {
          // Handle error - Show error message
          console.error(err);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  form {
    display: flex;
    flex-direction: column;
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input,
  select {
    padding: 5px;
    width: 200px;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  