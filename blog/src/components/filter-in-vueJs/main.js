// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'

// Create the Vue app instance
const app = createApp(App)

// Define the global "filter-like" function
app.config.globalProperties.$filters = {
  capitalize(val) {
    if (!val) return ''
    return val.toString().toUpperCase();
  }
}

// Mount the app
app.mount('#app')
