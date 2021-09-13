import {
  State,Service, User, Cart, CartService,
} from '../types/interface';

const mutations =  {
  loadServices(state: State, payload: Array<Service>) {
    state.services = payload;
  },
  loadCategoryServices(state: State, payload: Array<Service>) {
    state.categoryServices = payload;
  },
  changeCurrentCategory(state: State, payload: string) {
    state.currentCategory = payload;
  },
  loadOneService(state: State, payload: Service) {
    state.currentService = payload;
  },
  loadUser(state: State, payload: User) {
    state.currentUser = payload;
  },
  emptyUser(state: State, payload: string) {
    state.currentUser = payload;
  },
  updateCart(state: State, payload: CartService) {
    state.cart = [...state.cart, payload];
  },
  loadCart(state: State, payload: Cart) {
    state.cart = payload;
  },
  loadKeyword(state: State, payload: string) {
    state.keyword = payload;
  },
  loadSelectedCategory(state: State, payload: string) {
    state.selectedCategory = payload;
  },
  loadSortType(state: State, payload: string) {
    state.selectedSortPrice = payload;
  },
}

export default mutations;