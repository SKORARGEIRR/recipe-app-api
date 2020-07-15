import Vue from 'vue';
import VueRouter from 'vue-router';
// Import templates
import Deauthenticated from '../components/template/Deauthenticated.vue';
import Authenticated from '../components/template/Authenticated.vue';
// Import views
import LoginView from '../views/Login/Index.vue';
import HomeView from '../views/Home/Index.vue';
import MapView from '../views/Map/Index.vue';

Vue.use(VueRouter);

const routes = [
  // Deauthenticated
  {
    path: '/',
    name: 'Deauthenticated',
    component: Deauthenticated,
    redirect: '/login',
    meta: { title: 'Operations Explorer 2' },
    children: [
      // Login
      {
        path: 'login',
        name: 'Login',
        component: LoginView,
        meta: { title: 'Operations Explorer 2 | Login' },
      },
    ],
  },
  // Authenticated
  {
    path: '/opex2',
    name: 'Authenticated',
    component: Authenticated,
    redirect: '/opex2/home',
    meta: { title: 'Operations Explorer 2' },
    children: [
      // Home
      {
        path: 'home',
        name: 'Home',
        component: HomeView,
        meta: { title: 'Operations Explorer 2 | Startseite' },
      },
      // Map
      {
        path: 'map',
        name: 'Map',
        component: MapView,
        meta: { title: 'Operations Explorer 2 | Karte' },
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
