<template>
  <div class="item-detail">
    <h1>Item Details</h1>
    
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    
    <div v-if="item">
      <p><strong>ID:</strong> {{ item.id }}</p>
      <p><strong>Title:</strong> {{ item.title }}</p>
      <p><strong>Body:</strong> {{ item.body }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      item: null,
      loading: false,
      error: null
    };
  },
  mounted() {
    this.fetchItemDetails();
  },
  methods: {
    async fetchItemDetails() {
      const id = this.$route.params.id;
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.item = response.data;
      } catch (err) {
        this.error = 'Error fetching item details';
      } finally {
        this.loading = false;
      }
    },
    goBack() {
      this.$router.push({ name: 'ItemList' });
    }
  }
};
</script>

<style scoped>
button {
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
