<template>
    <div>
      <h1>Parent Component</h1>
      <!-- Pass multiple data types as props to the child -->
      <ChildComponent
        :userName="name"
        :userAge="age"
        :isActive="activeStatus"
        :userHobbies="hobbies"
        :userProfile="profile"
      />
  
      <hr />
  
      <!-- UI controls to update props from the parent -->
      <button @click="updateName">Update Name</button>
      <button @click="updateAge">Update Age</button>
      <button @click="toggleActiveStatus">Toggle Active Status</button>
      <button @click="updateHobbies">Add Hobby</button>
      <button @click="updateProfile">Update Profile</button>
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
        name: 'Saurabh Shukla',
        age: 30,
        activeStatus: true,
        hobbies: ['Coding', 'Reading', 'Cycling'],
        profile: {
          city: 'New Delhi',
          country: 'India'
        }
      };
    },
    methods: {
      updateName() {
        this.name = 'Saurabh Raj';
      },
      updateAge() {
        this.age += 1; // Increment age
      },
      toggleActiveStatus() {
        this.activeStatus = !this.activeStatus; // Toggle boolean
      },
      updateHobbies() {
        this.hobbies.push('Gaming'); // Add new hobby to the array
      },
      updateProfile() {
        this.profile.city = 'Mumbai'; // Update a nested object property
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    margin: 5px;
    padding: 10px;
  }
  </style>
  