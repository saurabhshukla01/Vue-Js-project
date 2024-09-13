<template>
    <div v-if="todo">
      <h2>To-Do Details</h2>
      <p><strong>ID:</strong> {{ todo.id }}</p>
      <p><strong>Title:</strong> {{ todo.title }}</p>
      <p><strong>Completed:</strong> {{ todo.completed ? 'Yes' : 'No' }}</p>
      <router-link to="/todo">Back to To-Do List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'], // Receive the to-do ID as a prop from the router
    data() {
      return {
        todo: null // Will hold the to-do details
      }
    },
    async mounted() {
      // Fetch the to-do details based on the ID
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
        const data = await response.json()
        this.todo = data // Assign the fetched data to the todo object
      } catch (error) {
        console.error('Error fetching to-do details:', error)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  