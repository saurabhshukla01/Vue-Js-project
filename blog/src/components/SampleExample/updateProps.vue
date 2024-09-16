<template>
    <div>
      <input v-model="name" @input="updateLastName" placeholder="Enter your name" />
      <p>Modified Name: {{ updatedName }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "", // Holds the user input
        updatedName: "" // Holds the modified name
      };
    },
    methods: {
      updateLastName() {
        // Split the name by space and replace the last name with "Raj"
        const parts = this.name.split(" ");
        if (parts.length > 1) {
          parts[parts.length - 1] = "Raj"; // Replace the last name
          this.updatedName = parts.join(" "); // Join the name back together
        } else {
          this.updatedName = this.name; // If no last name, keep it as is
        }
        // Console log the output
        console.log(this.updatedName);
      }
    }
  };
  </script>
  