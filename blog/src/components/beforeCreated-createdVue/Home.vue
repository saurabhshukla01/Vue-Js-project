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
    beforeCreate(){
      // this.name = "Sam";   // but its not display because its when data is not loaded then display.
      console.log("before create",this.name);
    }
    ,created(){
      this.name = "Sam";  // it is display because when data is render first after created is hook is called then show created property it is overwrite the data property value.
      console.log("created",this.name);
    }
  }
  </script>
  