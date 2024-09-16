<template>
    <div>
      <p>{{ name.name }}</p>
      <p>{{ name.email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"ChildPage",
    props: ['name'],
  };
  </script>
  