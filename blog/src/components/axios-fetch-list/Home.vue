<template> 
  <div>
    <h3>Item List</h3>

    <!-- Show loading message while data is being fetched -->
    <div v-if="loading">
      <p>Loading items, please wait...</p>
    </div>

    <!-- Display error if something goes wrong -->
    <div v-if="error">
      <p style="color: red;">{{ error }}</p>
    </div>

    <!-- Display the table once data is fetched -->
    <table v-if="!loading && !error" class="item-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.completed ? 'Completed' : 'Pending' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HomePage",
  data() {
    return {
      items: [], // to store fetched data
      loading: false, // to manage loading state
      error: null, // to handle errors
    };
  },
  async mounted() {
    this.loading = true; // Set loading to true when fetching starts
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      this.items = response.data; // Assign the fetched data to items
    } catch (error) {
      this.error = 'Failed to fetch data. Please try again later.'; // Show error message on failure
    } finally {
      this.loading = false; // Set loading to false when fetching is done
    }
  }
};
</script>

<style scoped>
.item-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.item-table th, .item-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.item-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.item-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.item-table tr:hover {
  background-color: #f1f1f1;
}

h3 {
  margin-bottom: 20px;
  color: #4CAF50;
}
</style>
