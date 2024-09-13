<template>
    <div>
      <h1>List of To-Dos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <td>{{ todo.id }}</td>
            <td>{{ todo.title }}</td>
            <td>{{ todo.completed ? 'Yes' : 'No' }}</td>
            <td>
              <!-- Route link to TodoDetails page with todo ID -->
              <router-link :to="{ name: 'TodoDetails', params: { id: todo.id } }">View Details</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        todos: [] // Will hold the list of to-dos
      }
    },
    async mounted() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        this.todos = data // Assign the fetched data to the todos array
      } catch (error) {
        console.error('Error fetching to-dos:', error)
      }
    }
  }
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #4CAF50;
    color: white;
  }
  
  a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  