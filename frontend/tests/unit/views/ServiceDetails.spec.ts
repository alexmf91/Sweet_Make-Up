import { mount } from '@vue/test-utils';
import { useRoute } from 'vue-router';
import toast from 'vue-dk-toast';
import ServiceDetails from '@/views/ServiceDetails.vue';
import state from '../../mockedState';
import router from '@/router';

const mockRouter = {
  push: jest.fn(),
};

describe('Given a ServiceDetails component', () => {
  describe('When the component is rendered', () => {
    test('Then should be the service-details id in the html', () => {
      const $store = {
        state,
        getters: {
          filteredServices: jest.fn(),
        },
        dispatch: jest.fn(),
        commit: jest.fn(),
      };
      const wrapper = mount(ServiceDetails, {
        global: {
          mocks: {
            $store,
          },
          plugins: [router, useRoute, toast],

        },
      });
      const byId = wrapper.find('#service-details');
      expect(byId.element.id).toBe('service-details');
    });
    describe('And the addToCartButton is  clicked', () => {
      describe('And the user is logged ', () => {
        test('Then the addServiceToCart action should be called', async () => {
          const addServiceToCart = jest.fn();
          const $store = {
            state,
            getters: {
              filteredServices: jest.fn(),
            },
            actions: {
              addServiceToCart: jest.fn(),
              fetchOneServiceForNameFromApi: jest.fn(),
            },
            dispatch: jest.fn(),
            commit: jest.fn(),
          };

          const wrapper = mount(ServiceDetails, {
            global: {
              mocks: {
                $store,
              },
              plugins: [router, useRoute, toast],

            },
          });

          const addToCartButton = wrapper.get('[data-test="addToCartButton"]');
          await addToCartButton.trigger('click');
          addServiceToCart();
          expect(addServiceToCart).toHaveBeenCalled();
        });
      });
      describe('And the user is not logged ', () => {
        test('Then the router push should be called', async () => {
          const addServiceToCart = jest.fn();
          const $store = {
            state: {
              currentUser: '',
              currentService: {
                name: 'myService',
              },
            },
            getters: {
              filteredServices: jest.fn(),
            },
            actions: {
              addServiceToCart: jest.fn(),
              fetchOneServiceForNameFromApi: jest.fn(),
            },
            dispatch: jest.fn(),
            commit: jest.fn(),
          };

          const wrapper = mount(ServiceDetails, {
            global: {
              mocks: {
                $store,
                $router: mockRouter,
              },
              plugins: [router, useRoute],

            },
          });

          const addToCartButton = wrapper.get('[data-test="addToCartButton"]');
          await addToCartButton.trigger('click');

          expect(mockRouter.push).toHaveBeenCalled();
        });
      });
    });
  });
});
