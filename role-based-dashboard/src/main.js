// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import the store

const app = createApp(App);
app.use(router); // Use the router
app.use(store);  // Use the Vuex store
app.mount('#app'); // Mount the app
