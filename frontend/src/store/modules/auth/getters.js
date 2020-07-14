import state from './state';

export default {
  /**
   * Returns if user is logged in.
   * @returns {boolean} True or false.
   */
  IS_USER_LOGGED_IN (state) {
    return state.user.logged_in;
  },
};
