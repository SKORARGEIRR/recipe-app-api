import mutations from './mutations';
import * as actions from './actions';
import getters from './getters';

const getDefaultState = () => {
  return {
    form: {
      dataset: null,
      dataset_options: [
        { text: 'ICD-10', value: 'ICD-10' },
        { text: 'OPS', value: 'OPS' },
        { text: 'Arbeitslosenquote', value: 'Arbeitslosenquote' },
      ],
    },
  }
};

const state = getDefaultState();

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
