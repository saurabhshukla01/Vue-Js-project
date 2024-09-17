<template>
    <div>
      <h2>Add Restaurant</h2>
      <form @submit.prevent="addRestaurant">
        <input v-model="name" placeholder="Restaurant Name" required />
        <input v-model="address" placeholder="Restaurant Address" required />
        <input v-model="cuisine" placeholder="Cuisine" required />
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        address: '',
        cuisine: ''
      };
    },
    methods: {
      addRestaurant() {
        console.log('Restaurant added:', this.name, this.address, this.cuisine);
        this.$router.push('/');
      }
    }
  };
  </script>
  