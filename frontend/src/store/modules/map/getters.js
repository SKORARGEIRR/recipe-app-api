import state from './map';

export default {
  /**
   * Returns selected dataset.
   *
   * @returns {Object} Selected dataset
   */
  GET_MAP_DATASET (state) {
    return state.form.dataset;
  },
  /**
   * Returns dataset options.
   *
   * @returns {Array} Available datasets
   */
  GET_MAP_DATASET_OPTIONS (state) {
    return state.form.dataset_options;
  },
};
