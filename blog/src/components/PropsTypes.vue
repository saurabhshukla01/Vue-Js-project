<template>
    <div>
      <h1>{{ title }}</h1>
      <p>Likes: {{ likes }}</p>
      <p>Published: {{ isPublished ? 'Yes' : 'No' }}</p>
      <ul>
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      <p>Author: {{ author.name }}</p>
    </div>
  </template>
<script>
export default {


    // props: {
    //   title: { type: String, required: true },
    //   likes: { type: Number, default: 0 },
    //   isPublished: { type: Boolean, default: false },
    //   tags: { type: Array, default: () => [] },
    //   author: { type: Object, default: () => ({ name: 'Anonymous' }) }
    // }


    props: {
      title: {
        type: String,          // Expect the prop to be a string
        required: true         // Make this prop required
      },
      likes: {
        type: Number,
        default: 0             // Set a default value for the prop
      },
      isPublished: {
        type: Boolean,
        default: false         // Boolean default value
      },
      tags: {
        type: Array,
        default() {
          return [];           // Default value as a function (for non-primitive types like objects/arrays)
        }
      },
      author: {
        type: Object,
        default() {
          return { name: 'Anonymous' };  // Default value for an object
        }
      },
      customProp: {
        type: String,
        validator(value) {
          // Custom validator function
          return ['yes', 'no'].includes(value); // Only accept 'yes' or 'no'
        }
      }
    }
  };
  
</script>