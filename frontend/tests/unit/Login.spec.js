import Test from '../../src/components/common/Test';
import Login from '../../src/views/Login/Index';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      localVue,
    });
  });

  it('should render Test component on mount', () => {
    expect(wrapper.findComponent(Test).exists()).to.be.true;
  });
});
