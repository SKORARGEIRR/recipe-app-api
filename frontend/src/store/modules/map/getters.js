import state from './state';

export default {
  /**
   * Returns the dataset.
   *
   * @returns {String} Selected dataset
   */
  GET_MAP_DATASET (state) {
    return state.form.dataset;
  },
};
