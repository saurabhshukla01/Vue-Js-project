<template>
  <div class="container mt-4">
    <b-button variant="primary" @click="sayHello">Click Me</b-button>
    <b-card
      title="BootstrapVue 3 Card"
      class="mt-4"
    >
      <p class="card-text">This is a card component from BootstrapVue 3!</p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    sayHello() {
      alert('Hello from BootstrapVue 3!');
    }
  }
};
</script>
