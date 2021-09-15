import getters from '@/store/getters';
import mockedState from '../../mockedState';

describe('Given a getCartServices getter', () => {
  describe('When recives a service state and its called', () => {
    test('Then should return the same services', () => {
      const result = getters.getCartServices(mockedState);
      expect(result).toEqual([
        {
          _id: '612cec70a7b929f51af4478a',
          amount: 2,
          service: {
            _id: '613a5ca16919dcbd1bbbbc4d',
            description: 'Servicio de Maquillaje',
            duration: '120',
            name: 'Peinado',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 80,
            type: 'make_up_and_hairstyles',
          },
        },
      ]);
    });
  });
});
describe('Given a calculateTotalCartPrice getter', () => {
  describe('When recives a cart state and its called', () => {
    test('Then should return the total cart price', () => {
      const result = getters.calculateTotalCartPrice(mockedState);
      expect(result).toEqual(160);
    });
  });
});
describe('Given a calculateCartQuantityItems getter', () => {
  describe('When recives a cart state and its called', () => {
    test('Then should return the total quantity items in cart', () => {
      const result = getters.calculateCartQuantityItems(mockedState);
      expect(result).toEqual(1);
    });
  });
});
describe('Given a filteredServices getter', () => {
  describe('When recives a cart state and its called', () => {
    describe('When there is no selected category', () => {
      test('Then should return the total quantity items in cart', () => {
        const result = getters.filteredServices(mockedState);
        expect(result).toEqual([
          {
            _id: '6135cec0464783204dfe5612',
            description:
              'Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.',
            duration: '120',
            name: 'Peinado',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 60,
            type: 'make_up_and_hairstyles',
          },
        ]);
      });
    });
    describe('When the category selected is make_up_and_hairstyles', () => {
      test('Then should return the total quantity items in cart', () => {
        const result = getters.filteredServices(mockedState);
        expect(result).toEqual([
          {
            _id: '6135cec0464783204dfe5612',
            description:
              'Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.',
            duration: '120',
            name: 'Peinado',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 60,
            type: 'make_up_and_hairstyles',
          },
        ]);
      });
    });
    describe('When the selectedSortPrice is "rising"', () => {
      test('Then should return the services ordered in rising price', () => {
        mockedState.selectedSortPrice = 'rising';
        mockedState.selectedCategory = '';
        mockedState.keyword = '';
        const result = getters.filteredServices(mockedState);
        expect(result).toEqual([
          {
            _id: '6135cec0464783204dfe5612',
            description:
              'Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.',
            duration: '120',
            name: 'Peinado',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 60,
            type: 'make_up_and_hairstyles',
          },
          {
            _id: '6135cec0464783204dfe5612',
            description:
              'Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.',
            duration: '120',
            name: 'Maquillaje',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 80,
            type: 'make_up_and_hairstyles',
          },
        ]);
      });
    });
    describe('When the selectedSortPrice is "descending"', () => {
      test('Then should return the services ordered in descending price', () => {
        mockedState.selectedSortPrice = 'descending';
        mockedState.selectedCategory = '';
        mockedState.keyword = '';
        const result = getters.filteredServices(mockedState);
        expect(result).toEqual([
          {
            _id: '6135cec0464783204dfe5612',
            description:
              'Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.',
            duration: '120',
            name: 'Maquillaje',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 80,
            type: 'make_up_and_hairstyles',
          },
          {
            _id: '6135cec0464783204dfe5612',
            description:
              'Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.',
            duration: '120',
            name: 'Peinado',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 60,
            type: 'make_up_and_hairstyles',
          },
        ]);
      });
    });
  });
});
