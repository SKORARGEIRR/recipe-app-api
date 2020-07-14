import Vue from 'vue';
// Bootstrap-vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
// JS-Cookie
// import Cookie from 'js-cookie';
// Axios
import axios from 'axios';
// Vuex
import Vuex from 'vuex';
// JS-Cookie
import Cookie from 'js-cookie';
// Store
import store from './store';
// Router
import router from './router';
/**
 * Use beforeEach() to check for cookie and validate token inside before
 * each redirect.
 */
router.beforeEach((to, from, next) => {
  let cookie = Cookie.getJSON('user');

  if (cookie) {
    console.log('Cookie found.');
    let token = cookie.token; // TODO: Implement token validation!
    next()
  } else {
    // We have no cookie. Sad :-(
      console.log('Cookie not found.');
      // Make sure logged in status is set to false
      store.commit('auth/TOGGLE_USER_LOGGED_IN', false);
      // Redirect user to login page. Meanwhile, avoid looping endlessly
      if (to.name !== 'Login') {
        next({ name: 'Login' })
      } else {
        next()
      };
  };
});
// Change meta title of each page.
const DEFAULT_TITLE = 'Operations Explorer'
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});
// Import App
import App from './App.vue';
// Import static
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/custom.css';

// Axios Config
const apiUrl = 'http://localhost:9000/api';
axios.defaults.baseURL = apiUrl;
axios.defaults.headers.get.Accepts = 'application/json';

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
