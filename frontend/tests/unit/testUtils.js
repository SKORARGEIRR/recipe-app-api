import { expect } from 'chai';

export const testAction = (
  action,
  actionPayload,
  state,
  expectedMutations,
  done
) => {
  let count = 0;
  let commit = (type, payload) => {
    let mutation = expectedMutations[count];
    try {
      // check if commit function is invoked with expected args
      expect(mutation.type).to.equal(type);
      if (payload) {
        expect(mutation.payload).to.deep.equal(payload);
      }
      count++;
      // check if all mutations have been dispatched
      if (count >= expectedMutations.length) {
        done();
      }
    } catch (error) {
      done(error);
    }
  };

  if (expectedMutations.length === 0) {
    expect(count).to.equal(0);
    done();
  } else {
    action({ commit, state }, actionPayload);
  }
};
