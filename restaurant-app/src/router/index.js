import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AddRestaurant from '../components/AddRestaurant.vue';
import UpdateRestaurant from '../components/UpdateRestaurant.vue';
import Login from '../components/Login.vue';
import CreateUser from '../components/CreateUser.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add-restaurant', component: AddRestaurant },
  { path: '/update-restaurant/:id', component: UpdateRestaurant },
  { path: '/login', component: Login },
  { path: '/create-user', component: CreateUser }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
