import sinon, { expect } from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
let mock = new MockAdapter(axios);

import { testAction } from "./testUtils";

//import { actions } from '@/store/index';
import { login } from './exampleAction';
import * as mutationTypes from '@/store/mutation-types';
import store from '../../src/store';

let chaiExpect = chai.expect;
import Vuex from 'vuex';

chai.use(sinonChai);

describe('actions', () => {
  beforeEach(function() {
    mock.reset();
  });

  it('should process payload/commits mutation for unsuccessful POST', done => {
    //mock.onPost('/user/token').networkError();
    const response = {
      data: {
        token: 'testtoken'
      }
    };
    const payload = { password: 'qwertz', email: 'asdf' };
    const state = null;
    const expectedMutations = [
      {
        type: mutationTypes.SET_USER_LOGGED_IN,
        payload: true
      },
    ];
    testAction(login, payload, state, expectedMutations, done);
  });
});

describe('mutations', () => {
  it('INCREMENT', () => {
    const newStore = new Vuex.Store({
      state: {
        count: 0,
      },
      mutations: {
        increment (state) { state.count++ }
      },
    });
    newStore.commit('increment');
    chaiExpect(newStore.state.count).to.equal(1)
  });
});
