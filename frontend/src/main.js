// Vue
import Vue from 'vue';
// Bootstrap-vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
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
 * each redirect. If anything fails, make sure vuex is clean and cookie
 * removed. Redirect user to login page.
 */
router.beforeEach((to, from, next) => {
  // Get cookie
  let cookie = Cookie.getJSON('user');

  if (cookie) {
    // Cookie found
    console.log('Cookie found.');
    // Save token from cookie
    let token = cookie.token;

    function validateToken(token) {
      return axios({
        method: 'get',
        url: '/user/me/',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Token ' + token,
        },
      })
      .then(res => {
        return true;
      })
      .catch(err => {
        return false;
      });
    };

    return validateToken(token)
    .then(res => {
      if (res) {
        // Token was valid
        console.log('Cookie found and token valid.');
        next();
      } else {
        // Token wasn't valid
        console.log('Cookie found but token is not valid.');
        // Remove cookie
        Cookie.remove('user');
        // Make sure logged in status is set to false
        store.commit('auth/TOGGLE_USER_LOGGED_IN', false);
        // Redirect user to login page. Meanwhile, avoid looping endlessly
        if (to.name !== 'Login') {
          next({ name: 'Login' });
        } else {
          next();
        };
      };
    })
    .catch(err => {
      console.log('Error validating token.', err);
    });
  } else {
    // We have no cookie. Sad :-(
    console.log('Cookie not found.');
    // Make sure logged in status is set to false
    store.commit('auth/TOGGLE_USER_LOGGED_IN', false);
    // Redirect user to login page. Meanwhile, avoid looping endlessly
    if (to.name !== 'Login') {
      next({ name: 'Login' });
    } else {
      next();
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
// Import custom SASS
import '@/assets/custom-vars.scss';
// Axios Config
const apiUrl = 'http://localhost:9000/api';
axios.defaults.baseURL = apiUrl;
axios.defaults.headers.get.Accepts = 'application/json';
// Inject plugins
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
// Config Vue
Vue.config.productionTip = false;
// Create Vue instance
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
