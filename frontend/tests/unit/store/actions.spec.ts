import { Commit, Dispatch } from 'vuex';
import axios from 'axios';
import actions from '@/store/actions';
import { LoginUser, RegisterUser, Service } from '@/types/interface';
import {
  configActionContextAndState,
  configActionContext,
  configActionContextDispatch,
} from '../../test.utils';

import state from '../../mockedState';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest. MockedFunction<Commit>;
const dispatch = jest.fn() as jest. MockedFunction<Dispatch>;

describe('Given a fetchServicesFromApi action', () => {
  describe('When is invoked', () => {
    test('Fetch all products from API', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });

      await actions.fetchServicesFromApi(configActionContext(commit));

      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a fetchServicesForCategoryFromApi action', () => {
  describe('When is invoked', () => {
    test('Fetch one product from API', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });

      await actions.fetchServicesForCategoryFromApi(configActionContext(commit), 'make_up_and_hairstyles');

      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a fetchOneServiceForNameFromApi action', () => {
  describe('When is invoked', () => {
    test('Fetch one product from API', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });

      await actions.fetchOneServiceForNameFromApi(configActionContext(commit), 'make_up_and_hairstyles');

      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a registerUser action', () => {
  describe('When is invoked', () => {
    test('Then should post userData', async () => {
      const userCart = mockedAxios.post.mockResolvedValue({
        data: {
          _id: '123',
          services: [],
        },
      });
      const userWithCart = {} as RegisterUser;
      await actions.registerUser(configActionContext(commit), userWithCart);
      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a loginUser action', () => {
  describe('When is invoked', () => {
    test('Then should get the user data', async () => {
      mockedAxios.post.mockResolvedValue({
        data: [],
      });
      const userData = {} as LoginUser;
      await actions.loginUser(configActionContext(commit), userData);

      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a userLogOut action', () => {
  describe('When is invoked', () => {
    test('Should commit emptyUser', async () => {
      await actions.userLogOut(configActionContext(commit));

      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a addServiceToCart action', () => {
  describe('When is invoked', () => {
    test('Then should post userData', async () => {
      const cartUpdatedToRender = mockedAxios.put.mockResolvedValue(
        {
          data: {

          },
        },
      );
      const userCart = mockedAxios.get.mockResolvedValue({
        data: {
          _id: '123',
          services: [{
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
          }],
        },
      });
      const currentUserCart = '1234';
      const currentService = {
        _id: '613a5ca16919dcbd1bbbbc4d',
        description: 'Servicio de Maquillaje',
        duration: '120',
        name: 'Peinado',
        picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
        price: 80,
        type: 'make_up_and_hairstyles',
      };
      const currentCartServices = {
        _id: '123',
        services: [{
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
        }],
      };
      await actions.addServiceToCart(configActionContext(commit), { currentUserCart, currentService });
      expect(commit).toHaveBeenCalled();
    });
    test('Then should post userData', async () => {
      const userCart = mockedAxios.get.mockResolvedValue({
        data: {
          _id: '123',
          services: [],
        },
      });
      const currentUserCart = '1234';
      const currentService = {
        _id: '613a5ca16919dcbd1bbbbc4d',
        description: 'Servicio de Maquillaje',
        duration: '120',
        name: 'Peinado',
        picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
        price: 80,
        type: 'make_up_and_hairstyles',
      };
      const currentCartServices = {
        _id: '123',
        services: [],
      };
      await actions.addServiceToCart(configActionContext(commit), { currentUserCart, currentService });
      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a removeServiceToCart action', () => {
  describe('When is invoked and the service amount its > 1', () => {
    test('Then should post userData', async () => {
      const cartUpdatedToRender = mockedAxios.put.mockResolvedValue(
        {
          data: {

          },
        },
      );
      const userCart = mockedAxios.get.mockResolvedValue({
        data: {
          _id: '123',
          services: [{
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
          }],
        },
      });
      const currentUserCart = '1234';
      const currentService = {
        _id: '613a5ca16919dcbd1bbbbc4d',
        description: 'Servicio de Maquillaje',
        duration: '120',
        name: 'Peinado',
        picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
        price: 80,
        type: 'make_up_and_hairstyles',
      };
      const currentCartServices = {
        _id: '123',
        services: [{
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
        }],
      };
      await actions.removeServiceToCart(configActionContext(commit), { currentUserCart, currentService });
      expect(commit).toHaveBeenCalled();
    });
  });
  describe('When is invoked and the service amount its < 1', () => {
    test('Then should post userData', async () => {
      const cartUpdatedToRender = mockedAxios.put.mockResolvedValue(
        {
          data: {

          },
        },
      );
      const data = mockedAxios.get.mockResolvedValue({
        data: {
          _id: '123',
          services: [{
            _id: '612cec70a7b929f51af4478a',
            amount: 1,
            service: {
              _id: '613a5ca16919dcbd1bbbbc4d',
              description: 'Servicio de Maquillaje',
              duration: '120',
              name: 'Peinado',
              picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
              price: 80,
              type: 'make_up_and_hairstyles',
            },
          }],
        },
      });
      const currentUserCart = '1234';
      const currentService = {
        _id: '613a5ca16919dcbd1bbbbc4d',
        description: 'Servicio de Maquillaje',
        duration: '120',
        name: 'Peinado',
        picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
        price: 80,
        type: 'make_up_and_hairstyles',
      };
      const currentCartServices = {
        _id: '123',
        services: [{
          _id: '612cec70a7b929f51af4478a',
          amount: 1,
          service: {
            _id: '613a5ca16919dcbd1bbbbc4d',
            description: 'Servicio de Maquillaje',
            duration: '120',
            name: 'Peinado',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 80,
            type: 'make_up_and_hairstyles',
          },
        }],
      };
      const serviceToUpdate = {
        service: {
          _id: '613a5ca16919dcbd1bbbbc4d',
          description: 'Servicio de Maquillaje',
          duration: '120',
          name: 'Peinado',
          picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
          price: 80,
          type: 'make_up_and_hairstyles',
        },
      };
      const cartUpdated = [];
      await actions.removeServiceToCart(configActionContext(commit), { currentUserCart, currentService });
      expect(commit).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteServiceFromCart action', () => {
  describe('When is invoked', () => {
    test('Then should delete the service from the cart', async () => {
      const data = mockedAxios.get.mockResolvedValue({
        data: {
          _id: '123',
          services: [{
            _id: '612cec70a7b929f51af4478a',
            amount: 1,
            service: {
              _id: '613a5ca16919dcbd1bbbbc4d',
              description: 'Servicio de Maquillaje',
              duration: '120',
              name: 'Peinado',
              picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
              price: 80,
              type: 'make_up_and_hairstyles',
            },
          }],
        },
      });
      const currentCartServices = {
        _id: '123',
        services: [{
          _id: '612cec70a7b929f51af4478a',
          amount: 1,
          service: {
            _id: '613a5ca16919dcbd1bbbbc4d',
            description: 'Servicio de Maquillaje',
            duration: '120',
            name: 'Peinado',
            picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
            price: 80,
            type: 'make_up_and_hairstyles',
          },
        }],
      };
      const currentUserCart = '1234';
      const currentService = {
        _id: '613a5ca16919dcbd1bbbbc4d',
        description: 'Servicio de Maquillaje',
        duration: '120',
        name: 'Peinado',
        picture: 'https://i.ibb.co/r53cmdd/1626077210.jpg',
        price: 80,
        type: 'make_up_and_hairstyles',
      };
      const cartUpdatedToRender = mockedAxios.put.mockResolvedValue({ data: {} });
      await actions.deleteServiceFromCart(configActionContext(commit), { currentUserCart, currentService });
      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a fetchCartFromApi action', () => {
  describe('When is invoked', () => {
    test('Fetch user cart from API', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });
      const currentUserCart = '123';
      await actions.fetchCartFromApi(configActionContext(commit), currentUserCart);

      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a filterServices action', () => {
  describe('When is invoked', () => {
    test('Then commit should been called', async () => {
      await actions.filterServices(configActionContext(commit), "keyword");

      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a filterByCategory action', () => {
  describe('When is invoked', () => {
    test('Then commit should been called', async () => {
      await actions.filterByCategory(configActionContext(commit), "category");

      expect(commit).toHaveBeenCalled();
    });
  });
});
describe('Given a sortByPrice action', () => {
  describe('When is invoked', () => {
    test('Then commit should been called', async () => {
      await actions.sortByPrice(configActionContext(commit), "sortType");

      expect(commit).toHaveBeenCalled();
    });
  });
});
