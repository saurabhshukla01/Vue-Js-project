

import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Dashboard from '@/components/Dashboard.vue';
import UserList from '@/components/UserList.vue';
import AddUser from '@/components/AddUser.vue';
import EditUser from '@/components/EditUser.vue';
import PageNoteFound from '@/components/PageNoteFound.vue';

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard },
    { path: '/users', component: UserList },
    { path: '/users/add', component: AddUser },
    { path: '/users/:id/edit', component: EditUser, props:true},
    { path: '', redirect: '/login' },
    { path: '/:pathMatch(.*)*', component: PageNoteFound }, // Catch-all for 404 Page Not Found
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


