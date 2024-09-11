<template>
    <div>
      <button @click="updateTitle">Update Parent Title</button>
    </div>
  </template>
  
  <script>
  export default {
    name:"ChildPage",
    methods:{
      updateTitle(){ 
        this.$emit('changeTitle',"Parent Updated")
      }
    }
  }
  </script>
  