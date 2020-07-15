import * as mutationTypes from '@/store/mutation-types';
import axios from 'axios';
import Cookie from 'js-cookie';
import router from '../../../router/index';

export const login = function({commit, dispatch, state, rootState, rootGetters}, payload) {
  let password = payload.password;
  let email = payload.email;
  let basic = btoa(password);
  let data = { email: email, password: basic };

  axios({
    method: 'post',
    url: '/user/token/',
    data: data,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
  .then(res => {
    console.log('Login erfolgreich.')
    // Save token
    let token = res.data.token;
    // Create user object from token
    let user = {
      token: token,
    };
    // Convert user obj to JSON obj
    let jsonUser = JSON.stringify(user)
    // Set cookie
    Cookie.set('user', jsonUser, {
      expires: 365,
      secure: false,
      sameSite: 'lax',
    });
    commit(mutationTypes.TOGGLE_USER_LOGGED_IN, true);
  })
  .catch(err => {
    // Do something
    console.log('Login fehlgeschlagen.', err);
    commit(mutationTypes.TOGGLE_USER_LOGGED_IN, false);
  });
};

export const logout = function({commit, dispatch, state, rootState, rootGetters}) {
  // Remove user cookie
  Cookie.remove('user');
  // Toggle logged in status
  commit(mutationTypes.TOGGLE_USER_LOGGED_IN, false);
  // Output all current cookies
  console.log('Current cookies are', Cookie.get());
  // Redirect user to default page for non-authenticated users
  router.push({ name: 'Deauthenticated' });
};