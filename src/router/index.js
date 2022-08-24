import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Articles from '../views/Articles.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import User from '../views/User.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
