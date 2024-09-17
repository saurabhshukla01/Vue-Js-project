// myMixin.js
export const myMixin = {
  methods: {
    greet() {
      console.log('Hello from the mixin!');
    },
    calculateSum(a, b) {
      return a + b;
    }
  }
};


<template>
    <div>
      <button @click="greet">Greet</button>
      <p>Sum: {{ calculateSum(5, 10) }}</p>
    </div>
  </template>
  
  <script>
  import { myMixin } from './myMixin';
  
  export default {
    mixins: [myMixin],
    created() {
      console.log('Component created!');
    }
  };
  </script>


export default {
    mixins: [myMixin],
    methods: {
      greet() {
        console.log('Hello from the component!');
      }
    }
  };

  

  mixins: [mixinOne, mixinTwo],

  export const myMixin = {
    created() {
      console.log('Mixin Created Hook');
    },
    methods: {
      fetchData() {
        console.log('Fetching data...');
      }
    }
  };
  