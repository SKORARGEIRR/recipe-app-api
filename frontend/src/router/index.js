import Vue from 'vue';
import VueRouter from 'vue-router';
// Import templates
import Deauthenticated from '../components/template/Deauthenticated.vue';
import Authenticated from '../components/template/Authenticated.vue';
// Import views
import Login from '../views/Login/Index.vue';
import Home from '../views/Home/Index.vue';

Vue.use(VueRouter);

const routes = [
  // Deauthenticated
  {
    path: '/',
    name: 'Deauthenticated',
    component: Deauthenticated,
    redirect: '/login',
    meta: { title: 'OpEx2 Deauthenticated' },
    children: [
      // Login
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { title: 'OpEx2 Login' },
      },
    ],
  },
  // Authenticated
  {
    path: '/opex2',
    name: 'Authenticated',
    component: Authenticated,
    redirect: '/opex2/home',
    meta: { title: 'OpEx2 Authenticated' },
    children: [
      // Home
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { title: 'OpEx2 Home' },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
