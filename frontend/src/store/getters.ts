import {
  State,
  Service, CartService,
} from '../types/interface';
 
const getters = {
  getCartServices(state: State): Array <Service> {
    return state.cart?.services?.map((services: Service) => services);
  },
  calculateTotalCartPrice(state: State): Array <CartService> {
    const totalCartPrice = state.cart?.services?.reduce((
      acc: number, service: any,
    ) => acc + service.amount * service.service.price, 0);
    return totalCartPrice;
  },
  calculateCartQuantityItems(state: State):Array<CartService> {
    return state.cart?.services?.length;
  },
  filteredServices:
  (state: State): Array<Service> => {
    let filteredServicesByCategory = state.services
      .filter((service: Service) => service.name
        .toLowerCase().includes(state.keyword.toLowerCase()));
    if (state.selectedCategory) {
      filteredServicesByCategory = state.services
        .filter((service: Service) => service
          .name.toLowerCase().includes(state.keyword.toLowerCase()))
        .filter((service: Service) => service.type === state.selectedCategory);
    }
    switch (state.selectedSortPrice) {
      case "rising":
        filteredServicesByCategory = filteredServicesByCategory?.sort((serviceA:any,
          serviceB:any) => serviceA.price - serviceB.price);
        break;
      case "descending":
        filteredServicesByCategory = filteredServicesByCategory?.sort((serviceA:any,
          serviceB:any) => serviceB.price - serviceA.price);
        break;
      default:
        break;
    }
    return filteredServicesByCategory;
  },
};
  export default getters;