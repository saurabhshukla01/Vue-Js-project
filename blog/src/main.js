// Import Vue and App component
import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap and BootstrapVue 3 CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3';

// Import Vue Router and necessary methods from vue-router
// import { createRouter, createWebHistory } from 'vue-router';

// Create the Vue app instance
const app = createApp(App);

// Use BootstrapVue 3 globally
app.use(BootstrapVue3);

// Mount the app to the #app element
app.mount('#app');
