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
    // old vue 2 function hooks
    // beforeDestroy()
    // {
    //   // its not display because its when before Dom Removed
    //   console.log("before destroy");  
    // },
    // destroyed() 
    // {
    //   // its display because after Dom Removed
    //   console.log("destroyed");   
    // }

    // new vue 3 function hooks
    beforeUnmount() {
      // Logic before component is unmounted
      alert("before Unmounted");
      console.log("before Unmount");  
    },
    unmounted() {
      // Logic after component is unmounted
      alert("Unmounted");
      console.log("before Unmounted");  
    }
  }
  </script>
  