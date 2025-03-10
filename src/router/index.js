import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import UserList from '../components/UserList.vue';
import UserProfile from '../components/UserProfile.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/users', name: 'UserList', component: UserList },
  { path: '/users/:id', name: 'UserProfile', component: UserProfile, props: true },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
