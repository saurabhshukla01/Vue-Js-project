<template>
  <div class="api-list">
    <h1>Item List</h1>
    <!-- Back to User List button -->
    <router-link to="/users" class="back-button">Go to User List</router-link><br/><br/>
    <!-- Back to Todo List button -->
    <router-link to="/todo" class="back-button">Go to Todo List</router-link>

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
            <button @click="viewDetails(item.id)">View Details</button>  
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      loading: false,
      error: null
    };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
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
    // Navigate to the ItemDetail page with the item ID
    viewDetails(id) {
      this.$router.push({ name: 'ItemDetail', params: { id } });
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
