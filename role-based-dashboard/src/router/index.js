

import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Dashboard from '@/components/Dashboard.vue';
import UserList from '@/components/UserList.vue';
import AddUser from '@/components/AddUser.vue';
import EditUser from '@/components/EditUser.vue';
import PageNoteFound from '@/components/PageNoteFound.vue';
import store from '@/store';  // assuming you manage user state with Vuex

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard , meta: { requiresAuth: true }},
    { path: '/users', component: UserList , meta: { requiresAuth: true }},
    { path: '/users/add', component: AddUser , meta: { requiresAuth: true }},
    { path: '/users/:id/edit', component: EditUser, props:true , meta: { requiresAuth: true }},
    { path: '', redirect: '/login' },
    { path: '/:pathMatch(.*)*', component: PageNoteFound }, // Catch-all for 404 Page Not Found
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard for route protection
router.beforeEach((to, from, next) => {
  const loggedIn = store.getters.isAuthenticated;  // check if user is authenticated from Vuex or localStorage

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    // Redirect to login if not authenticated
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});


export default router;


