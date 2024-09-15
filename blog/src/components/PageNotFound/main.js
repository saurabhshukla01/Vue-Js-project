// Import Vue and App component
import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap and BootstrapVue 3 CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3';

// Import Vue Router and necessary methods from vue-router
import { createRouter, createWebHistory } from 'vue-router';

// Import the components for routing
import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import User from './components/User.vue';
import PageNotFound from './components/PageNotFound.vue';

// Define the routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/user/:id', component: User },
  // { path: '*', component: PageNotFound },  // not used its use in vue 2 not this * is not exits
  { path: '/:pathMatch(.*)*', component: PageNotFound }, // Catch-all for 404 Page Not Found
];


// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create the Vue app instance
const app = createApp(App);

// Use BootstrapVue 3 globally
app.use(BootstrapVue3);

// Use Vue Router globally
app.use(router);

// Define the global "filter-like" function (for example: capitalize)
app.config.globalProperties.$filters = {
  capitalize(val) {
    if (!val) return '';
    return val.toString().toUpperCase();
  },
};

// Mount the app to the #app element
app.mount('#app');
