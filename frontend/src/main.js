import Vue from 'vue';
// Bootstrap-vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
// JS-Cookie
// import Cookie from 'js-cookie';
// Axios
import axios from 'axios';
// Vuex
import Vuex from 'vuex';
// Router
import router from './router';
// Store
import store from './store';
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
