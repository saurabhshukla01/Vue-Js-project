import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap and BootstrapVue 3 CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3';

// Create the Vue app instance
const app = createApp(App)

app.use(BootstrapVue3); // Use BootstrapVue 3 globally

// Define the global "filter-like" function
app.config.globalProperties.$filters = {
  capitalize(val) {
    if (!val) return ''
    return val.toString().toUpperCase();
  }
}

// Mount the app
app.mount('#app')
