<template>
    <div>
      <h2>Update Restaurant</h2>
      <form @submit.prevent="updateRestaurant">
        <input v-model="name" placeholder="Restaurant Name" required />
        <input v-model="address" placeholder="Restaurant Address" required />
        <input v-model="cuisine" placeholder="Cuisine" required />
        <button type="submit">Update</button>
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
      updateRestaurant() {
        console.log('Restaurant updated:', this.name, this.address, this.cuisine);
        this.$router.push('/');
      }
    }
  };
  </script>
  