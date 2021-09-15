import { mount } from '@vue/test-utils';
import Search from '@/views/Search.vue';
import state from '../../mockedState';

describe('Given a Search component', () => {
  describe('When the component is rendered', () => {
    test('Then should be the search id in the html', () => {
      const $store = {
        state,
        getters: {
          filteredServices: jest.fn(),
        },
        dispatch: jest.fn(),
        commit: jest.fn(),
      };

      const wrapper = mount(Search, {
        global: {
          mocks: {
            $store,
          },
        },
      });
      const byId = wrapper.find('#search');
      expect(byId.element.id).toBe('search');
    });
    describe('And the main-logo is clicked', () => {
      test('Then the scrollToTop function should be callled', async () => {
        window.scrollTo = jest.fn();
        const $store = {
          state,
          getters: {
            filteredServices: [{
              service: {
                name: 'ServiceName',
                price: 'ServicePrice',
              },
            }],
          },
          dispatch: jest.fn(),
          commit: jest.fn(),
        };

        const wrapper = mount(Search, {
          global: {
            mocks: {
              $store,
            },
          },
        });
        const detailsButton = wrapper.get('[data-test="details-button"]');
        await detailsButton.trigger('click');

        expect(window.scrollTo).toHaveBeenCalled();
      });
    });
  });
});
