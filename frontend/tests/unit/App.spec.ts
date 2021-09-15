import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import state from '../mockedState';
import router from '../../src/router';

describe('Given a App component', () => {
  describe('When is rendered', () => {
    test('Should render a header component', () => {
      const $store = {
        state,
        getters: {
          calculateCartQuantityItems: jest.fn(),
          getCartServices: jest.fn(),
          calculateTotalCartPrice: jest.fn(),
        },
        dispatch: jest.fn(),
        commit: jest.fn(),
      };
      const methods = {
        logOut: jest.fn(),
        scrollToTop: jest.fn(),
      };

      const wrapper = mount(App, {
        global: {
          mocks: {
            $store,
            methods,
          },
          plugins: [router],
        },
      });
      expect(wrapper.html()).toContain('<header>');
    });
  });
});
