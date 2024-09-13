<template>
    <div>
      <h3>Home</h3>
      <p>{{ name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"homePage",
    data(){
      return{
        name:"Saurabh Shukla"
      }
    },
    beforeMount(){
      // its not display because its when before Html render
      console.log("before mounted",this.$el);  // el means ( html element define )
    },
    mounted(){
      // its display because its when Html render
      console.log("mounted",this.$el);   // el means ( html element define )
    }
  }
  </script>
  