import * as mutationTypes from '@/store/mutation-types';
import headers from '../../../constants/headers';
import axios from 'axios';
import Cookie from 'js-cookie';
import router from '../../../router/index';

/**
 * Sets the selected dataset for current map view.
 *
 * @param {String} payload Selected dataset
 */
export const setDataset = function({commit, dispatch, state, rootState, rootGetters}, payload) {
  commit(mutationTypes.SET_MAP_DATASET, payload);
};
