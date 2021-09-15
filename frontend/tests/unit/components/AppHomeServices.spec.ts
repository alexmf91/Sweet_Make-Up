import { mount } from '@vue/test-utils';
import AppHomeServices from '@/components/AppHomeServices.vue';

describe('Given an AppHomeServices component', () => {
  describe('When the component is rendered', () => {
    test('Then should be the services id in a html tag', () => {
      const wrapper = mount(AppHomeServices);
      const byId = wrapper.find('#services');
      expect(byId.element.id).toBe('services');
    });
  });
});
