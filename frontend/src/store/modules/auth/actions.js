import * as mutationTypes from '@/store/mutation-types';
import headers from '../../../constants/headers';
import axios from 'axios';
import Cookie from 'js-cookie';
import router from '../../../router/index';

/**
 * Login user by retrieving valid token for authentication. Save token
 * to cookie and set vuex logged in status. Encrypt password with base64
 * before sending credentials to backend.
 *
 * @param {Object} payload Object containing user credentials
 */
export const login = function({commit, dispatch, state, rootState, rootGetters}, payload) {
  let password = payload.password;
  let email = payload.email;
  let basic = btoa(password);
  let data = { email: email, password: basic };

  axios({
    method: 'post',
    url: '/user/token/',
    data: data,
    headers: headers.HEADER_DEFAULT,
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
    commit(mutationTypes.TOGGLE_AUTH_LOGGED_IN, true);
  })
  .catch(err => {
    console.log('Login fehlgeschlagen.', err);
    commit(mutationTypes.TOGGLE_AUTH_LOGGED_IN, false);
  });
};

/**
 * Logout user removing cookie and cleaning up vuex. Redirect user to
 * deauthenticated area afterwards.
 */
export const logout = function({commit, dispatch, state, rootState, rootGetters}) {
  // Remove user cookie
  Cookie.remove('user');
  // Toggle logged in status
  commit(mutationTypes.TOGGLE_AUTH_LOGGED_IN, false);
  // Output all current cookies
  console.log('Current cookies are', Cookie.get());
  // Redirect user to login page, if not already present
  let route = router.currentRoute;
  if (route.name !== 'Login') {
    router.push({ name: 'Deauthenticated' });
  };
};
