  <template>
    <div>
      <h3>Custom Directive Example</h3>
      <!-- Add content here related to the directive -->
      <h1 v-color="'red'">This text will be red!</h1>
      <p v-color="'blue'">This text will be blue!</p>
      <!-- focus directive input text -->
      <input v-focus.log type="text" placeholder="This input will be focused" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'DirectivePage' // Multi-word name
  };
  </script>
  