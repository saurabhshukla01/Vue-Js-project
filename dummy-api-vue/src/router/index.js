import { createRouter, createWebHistory } from 'vue-router'; // Vue 3 Router imports
import ItemList from '../components/ItemList.vue';
import ItemDetail from '../components/ItemDetail.vue';
import UserList from '../components/UserList.vue';
import UserDetails from '../components/UserDetails.vue';
import TodoList from '../components/TodoList.vue';
import TodoDetails from '../components/TodoDetails.vue';


const routes = [
  { path: '/', name: 'ItemList', component: ItemList },
  { path: '/item/:id', name: 'ItemDetail', component: ItemDetail },
  { path: '/users', name: 'UserList', component: UserList },
  { path: '/user/:id', name: 'UserDetails', component: UserDetails , props: true}, // This will pass the route param 'id' as a prop to the UserDetails component
  { path: '/todo', name: 'TodoList', component: TodoList },
  { path: '/todo/:id', name: 'TodoDetails', component: TodoDetails , props: true}, // This will pass the route param 'id' as a prop to the TodoDetails component
];

// Use createRouter and createWebHistory (for history mode)
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
