<template>
    <div>
      <h1>List of Users</h1>
      
      <!-- Table for displaying user data -->
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td><a :href="'http://' + user.website" target="_blank">{{ user.website }}</a></td>
            <td>
              <router-link :to="{ name: 'UserDetails', params: { id: user.id }}">View Details</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      
      <!-- Back to User List button -->
      <router-link to="/" class="back-button">Back to Item List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: []
      }
    },
    async mounted() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.users = data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Basic styling for the table */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #f9f9f9;
  }
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  /* Styling for the table header */
  th {
    background-color: #4CAF50;
    color: white;
    font-weight: bold;
  }
  
  /* Hover effect for table rows */
  tr:hover {
    background-color: #f1f1f1;
  }
  
  /* Link styling */
  a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  /* Back button styling */
  .back-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
  }
  
  .back-button:hover {
    background-color: #45a049;
  }
  </style>
  