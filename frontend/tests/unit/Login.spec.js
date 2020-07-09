import Test from '../../src/components/common/Test';
import Login from '../../src/views/Login/Index';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import Vuex from 'vuex';
import store from '../../src/store/index';

const localVue = createLocalVue();
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)
localVue.use(Vuex)

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      store,
      localVue,
    });
  });

  it('should render Test component on mount', () => {
    expect(wrapper.findComponent(Test).exists()).to.be.true;
  });
});
