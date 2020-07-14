import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as mutationTypes from '@/store/mutation-types';
// Modules
import auth from './modules/auth/auth';

Vue.use(Vuex);

/**
 * Sets default state of vuex store.
 * @constant getDefaultState Returns default state.
 */
const getDefaultState = () => {
  return {}
};

const state = getDefaultState();

const mutations = {};

export const actions = {};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    auth,
  },
});
