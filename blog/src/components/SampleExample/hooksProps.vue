<template>
  <div>
    <h1>Vue Lifecycle Hooks Example</h1>
    <input v-model="name" @input="updateLastName" placeholder="Enter your name" />
    <p>Modified Name: {{ updatedName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",          // Stores the input value
      updatedName: "",   // Stores the modified name with "Raj" as last name
    };
  },
  // Lifecycle hooks
  created() {
    console.log("Component created: Data and methods are initialized.");
  },
  beforeMount() {
    console.log("Component beforeMount: Template is not yet rendered.");
  },
  mounted() {
    console.log("Component mounted: Template has been rendered.");
  },
  beforeUpdate() {
    console.log("Component beforeUpdate: Data has changed but the DOM is not yet updated.");
  },
  updated() {
    console.log("Component updated: DOM has been updated with the new data.");
  },
  beforeUnmount() {
    console.log("Component beforeUnmount: Component is about to be unmounted.");
  },
  unmounted() {
    console.log("Component unmounted: Component has been unmounted.");
  },
  methods: {
    updateLastName() {
      // Split the name and replace the last name with "Raj"
      const parts = this.name.split(" ");
      if (parts.length > 1) {
        parts[parts.length - 1] = "Raj"; // Replace the last name
        this.updatedName = parts.join(" ");
      } else {
        this.updatedName = this.name; // If no last name is provided, do not modify
      }
      // Log the updated name to the console
      console.log("Updated Name:", this.updatedName);
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
}
input {
  margin-bottom: 20px;
}
button {
  margin-top: 20px;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
