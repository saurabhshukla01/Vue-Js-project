<template>
    <div class="user-list-container">
      <h2>User List</h2>
  
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="confirmDelete(user.id)" class="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
        errorMessage: '',
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      // Fetch the user list from the dummy API
      async fetchUsers() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          this.users = response.data;
        } catch (error) {
          this.errorMessage = 'Failed to load user list.';
          console.error(error);
        }
      },
      // Method to confirm deletion
      confirmDelete(userId) {
        const isConfirmed = window.confirm('Are you sure you want to delete this user?');
        if (isConfirmed) {
          this.deleteUser(userId);
        }
      },
      // Delete a user and remove from the local list
      async deleteUser(userId) {
        try {
          // Simulate DELETE request to the API
          await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
          // Remove the user from the list after successful deletion
          this.users = this.users.filter(user => user.id !== userId);
          this.errorMessage = ''; // Reset error message if any
        } catch (error) {
          this.errorMessage = 'Failed to delete user.';
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .user-list-container {
    max-width: 800px;
    margin: 50px auto;
    text-align: center;
  }
  
  .user-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .user-table th, .user-table td {
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .user-table th {
    background-color: #f9f9f9;
  }
  
  .delete-btn {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .delete-btn:hover {
    background-color: #ff1a1a;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>
  