import { createApp } from 'vue'; // Vue 3 uses createApp
import App from './App.vue';
import router from './router'; // Make sure router is properly set up

// Create and mount the app instance
const app = createApp(App);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
