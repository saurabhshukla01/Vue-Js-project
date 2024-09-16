<template>
    <div>
      <h2>Child Component</h2>
      <p><strong>Name:</strong> {{ userName }}</p>
      <p><strong>Age:</strong> {{ userAge }}</p>
      <p><strong>Active Status:</strong> {{ isActive ? 'Active' : 'Inactive' }}</p>
      <p><strong>Hobbies:</strong></p>
      <ul>
        <li v-for="(hobby, index) in userHobbies" :key="index">{{ hobby }}</li>
      </ul>
      <p><strong>Location:</strong> {{ userProfile.city }}, {{ userProfile.country }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      userName: {
        type: String,
        required: true
      },
      userAge: {
        type: Number,
        required: true
      },
      isActive: {
        type: Boolean,
        required: true
      },
      userHobbies: {
        type: Array,
        required: true
      },
      userProfile: {
        type: Object,
        required: true
      }
    },
    watch: {
      userName(newVal, oldVal) {
        console.log(`Name changed from ${oldVal} to ${newVal}`);
      },
      userAge(newVal, oldVal) {
        console.log(`Age changed from ${oldVal} to ${newVal}`);
      },
      isActive(newVal) {
        console.log(`Active status changed to ${newVal}`);
      },
      userHobbies(newVal) {
        console.log(`Hobbies updated: ${newVal.join(', ')}`);
      },
      userProfile: {
        deep: true, // Watching nested object changes
        handler(newVal) {
          console.log(`Profile updated to: ${newVal.city}, ${newVal.country}`);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  p {
    margin: 5px 0;
  }
  </style>
  