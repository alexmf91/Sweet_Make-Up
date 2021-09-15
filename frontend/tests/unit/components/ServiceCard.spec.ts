import { mount } from '@vue/test-utils';
import ServiceCard from '@/components/ServiceCard.vue';

const mockRoute = {
  params: {
    id: 'myId',
    category: 'FerloCategory',
  },
};
const mockRouter = {
  push: jest.fn(),
};
describe('Given a ServiceCard component', () => {
  describe('When the component is rendered', () => {
    test('Then should be the service-card id in the html', () => {
      const wrapper = mount(ServiceCard);
      const byId = wrapper.find('#service-card');
      expect(byId.element.id).toBe('service-card');
    });
    test('Then should be the service-card id in the html', () => {
      const scrollToTop = jest.fn();
      const wrapper = mount(ServiceCard, {
        global: {
          mocks: {
            methods: {
              scrollToTop,
            },
            $route: mockRoute,
            $router: mockRouter,
          },
        },
        props: {
          id: 'myId',
          name: 'Name prop',
          category: 'Category prop',
          image: 'Url prop',
          description: 'Description prop',
        },
      });
      const title = wrapper.find('.service-card__service-info');
      expect(title.text()).toContain('Name prop');
    });
    describe('And the moreButton is  clicked', () => {
      test('Then the logOut function should be called', async () => {
        const scrollToTop = jest.fn();
        const wrapper = mount(ServiceCard, {
          global: {
            mocks: {
              methods: {
                scrollToTop,
              },
            },
          },
        });
        scrollToTop();
        const moreButton = wrapper.get('[data-test="more-button"]');
        await moreButton.trigger('click');

        expect(scrollToTop).toHaveBeenCalled();
      });
    });
  });
});
