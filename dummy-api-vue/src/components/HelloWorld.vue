<template>
  <div class="api-list">
    <h1>Item List</h1>

    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>
            <button @click="fetchItemDetails(item.id)">View Details</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedItem">
      <h2>Item Details</h2>
      <p><strong>ID:</strong> {{ selectedItem.id }}</p>
      <p><strong>Title:</strong> {{ selectedItem.title }}</p>
      <p><strong>Body:</strong> {{ selectedItem.body }}</p>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [], // List of items
      selectedItem: null, // Selected item for details
      loading: false, // Loading state
      error: null // Error message
    };
  },
  mounted() {
    this.fetchItems(); // Fetch the list when the component is mounted
  },
  methods: {
    // Fetch list of items from API
    async fetchItems() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.items = response.data;
      } catch (err) {
        this.error = 'Error fetching items';
      } finally {
        this.loading = false;
      }
    },
    // Fetch details of a specific item
    async fetchItemDetails(id) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.selectedItem = response.data;
      } catch (err) {
        this.error = 'Error fetching item details';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
