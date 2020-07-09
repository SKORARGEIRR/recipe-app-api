import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as mutationTypes from '@/store/mutation-types';

Vue.use(Vuex);

/**
 * Sets default state of vuex store.
 * @constant getDefaultState Returns default state.
 */
const getDefaultState = () => {
  return {
    user: {
      logged_in: false,
    },
  }
};

const state = getDefaultState();

const mutations = {
  /**
   * Sets logged_in property of user object.
   * @param {boolean} payload True or false.
   */
  [mutationTypes.SET_USER_LOGGED_IN] (state, payload) {
    state.user.logged_in = payload;
  },
};

export const actions = {
  /**
   * Login user with provided credentials.
   * @param {object} payload An object containing user credentials.
   */
  login ({commit, dispatch, state, rootState, rootGetters}, payload) {
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
      // Do something
      console.log(res);
      commit('SET_USER_LOGGED_IN', true);
    })
    .catch(err => {
      // Do something
      console.log('error @ /user/token..', err);
      commit('SET_USER_LOGGED_IN', false);
    });
  },
};

const getters = {
  /**
   * Returns if user is logged in.
   * @returns {boolean} True or false.
   */
  IS_USER_LOGGED_IN (state) {
    return state.user.logged_in;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {},
});
