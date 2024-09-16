<template>
    <div>
      <h1>Search Component</h1>
      <!-- Input field for search query -->
      <input v-model="searchQuery" placeholder="Search..." />
      
      <ChildComponent :query="searchQuery" />
  
      <p v-if="loading">Loading...</p>
      <ul>
        <li v-for="result in results" :key="result.id">{{ result.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        searchQuery: '',
        results: [],
        loading: false
      };
    },
    watch: {
      searchQuery: 'fetchResults' // Watch for changes in the searchQuery and call fetchResults
    },
    methods: {
      fetchResults() {
        this.loading = true;
  
        // Simulate an API call
        setTimeout(() => {
          // Update the results based on the search query
          this.results = [
            { id: 1, name: `Result for "${this.searchQuery}"` },
            { id: 2, name: `Another result for "${this.searchQuery}"` }
          ];
          this.loading = false;
        }, 1000);
      }
    }
  };
  </script>
  
  <style scoped>
  input {
    margin: 10px 0;
  }
  </style>
  