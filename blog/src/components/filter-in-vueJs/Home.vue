<template>
    <div>
      <!-- Using the global filter-like function -->
      <p>{{ $filters.capitalize("hello world") }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"homePage",
  }
  </script>
  