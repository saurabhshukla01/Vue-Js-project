<template>
    <div v-if="user">
      <h2>User Details</h2>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <p><strong>Website:</strong> <a :href="'http://' + user.website" target="_blank">{{ user.website }}</a></p>
      <router-link to="/users">Back to User List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'], // The id is passed as a prop from the router
    data() {
      return {
        user: null
      }
    },
    async mounted() {
      // Fetch user details based on the ID from the route parameter
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        const data = await response.json()
        this.user = data
      } catch (error) {
        console.error('Error fetching user details:', error)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  