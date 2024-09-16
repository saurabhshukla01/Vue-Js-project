<template>
    <div>
      <h2>Child Component</h2>
      <p>Current Search Query: {{ query }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      query: {
        type: String,
        required: true
      }
    },
    watch: {
      query(newVal, oldVal) {
        console.log(`Search query changed from "${oldVal}" to "${newVal}"`);
      }
    }
  };
  </script>
  