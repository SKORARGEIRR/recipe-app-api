import * as mutationTypes from '@/store/mutation-types';

export default {
  /**
   * Sets the selected dataset for map view.
   *
   * @param {String} payload Selected dataset
   */
  [mutationTypes.SET_MAP_DATASET] (state, payload) {
    state.form.dataset = payload;
  },
};
