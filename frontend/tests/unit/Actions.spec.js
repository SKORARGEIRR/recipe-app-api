import sinon, { expect } from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
let mock = new MockAdapter(axios);

import { testAction } from "./testUtils";

import { actions } from '@/store/index';
import * as mutationTypes from '@/store/mutation-types';

chai.use(sinonChai);

describe('actions', () => {
  beforeEach(function() {
    mock.reset();
  });

  it('should process payload/commits mutation for unsuccessful POST', done => {
    const response = {
      data: {
        token: 'testtoken'
      }
    };
    const payload = {
      password: 'testpassword',
      email: 'test@test.tdd'
    };
    const state = null;
    const expectedMutations = [
      {
        type: mutationTypes.SET_USER_LOGGED_IN,
        payload: false
      },
    ];
    mock.onPost('/user/token').reply(500);
    testAction(actions.login, payload, state, expectedMutations, done);
  });
});
