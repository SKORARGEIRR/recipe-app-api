import * as mutationTypes from '@/store/mutation-types';

export default {
  /**
   * Toggles logged_in property of user object.
   * @param {boolean} payload True or false.
   */
  [mutationTypes.TOGGLE_USER_LOGGED_IN] (state, payload) {
    state.user.logged_in = payload;
  },
};
