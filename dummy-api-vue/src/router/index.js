import { createRouter, createWebHistory } from 'vue-router'; // Vue 3 Router imports
import ItemList from '../components/ItemList.vue';
import ItemDetail from '../components/ItemDetail.vue';

const routes = [
  { path: '/', name: 'ItemList', component: ItemList },
  { path: '/item/:id', name: 'ItemDetail', component: ItemDetail },
];

// Use createRouter and createWebHistory (for history mode)
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
