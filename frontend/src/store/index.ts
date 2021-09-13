/* eslint-disable no-underscore-dangle */
import { createStore, ActionContext } from 'vuex';
import axios from 'axios';
import {
  State, RegisterUser, LoginUser,
  Service, User, Cart, CartService,
} from '../types/interface';

export default createStore({
  state: {
    services: [],
    categoryServices: [],
    currentCategory: '',
    currentService: {},
    currentUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : "",
    cart: [],
    keyword: '',
    selectedCategory: '',
    selectedSortPrice: '',
  },
  getters: {
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
  },
  mutations: {
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
    emptyUser(state, payload: string) {
      state.currentUser = payload;
    },
    updateCart(state: State, payload: CartService) {
      state.cart = [...state.cart, payload];
    },
    loadCart(state, payload: Cart) {
      state.cart = payload;
    },
    loadKeyword(state, payload: string) {
      state.keyword = payload;
    },
    loadSelectedCategory(state, payload: string) {
      state.selectedCategory = payload;
    },
    loadSortType(state, payload: string) {
      state.selectedSortPrice = payload;
    },
  },
  actions: {
    async fetchServicesFromApi({ commit }:ActionContext<State, State>) {
      const { data } = await axios.get('http://localhost:8001/api/service');
      commit('loadServices', data);
    },
    async fetchServicesForCategoryFromApi({ commit }:ActionContext<State, State>, query: string) {
      const { data } = await axios.get(`http://localhost:8001/api/service/?type=${query}`);
      commit('loadCategoryServices', data);
      commit('changeCurrentCategory', query);
    },
    async fetchOneServiceForNameFromApi({ commit }:ActionContext<State, State>, query: string) {
      const { data } = await axios.get(`http://localhost:8001/api/service/?name=${query}`);
      commit('loadOneService', data[0]);
    },
    async registerUser({ commit }:ActionContext<State, State>, user: RegisterUser) {
      const userCart = await axios.post('http://localhost:8001/api/cart');
      const userWithCart = { ...user, cart: userCart.data._id };
      await axios.post('http://localhost:8001/api/register', userWithCart);
      localStorage.setItem("user", JSON.stringify(userWithCart));
      commit("loadUser", userWithCart);
    },
    async loginUser({ commit }:ActionContext<State, State>, user: LoginUser) {
      const { data } = await axios.post('http://localhost:8001/api/login', user);
      localStorage.setItem("user", JSON.stringify(data.user));
      commit("loadUser", data.user);
    },
    userLogOut({ commit }:ActionContext<State, State>) {
      const noUser = '';
      commit("emptyUser", noUser);
    },
    async addServiceToCart({ commit }:ActionContext<State, State>,
      { currentUserCart, currentService }:{ currentUserCart: string, currentService: Service }) {
      const { data } = await axios.get(`http://localhost:8001/api/cart/${currentUserCart}`);
      let cartUpdated;
      const currentCartServices = data.services;
      if (currentCartServices.some((element: any) => element
        .service._id === currentService._id)) {
        cartUpdated = {
          services: currentCartServices
            .map((element: any) => (element.service._id === currentService._id
              ? { ...element, amount: element.amount + 1 }
              : element)),
        };
      } else {
        cartUpdated = {
          services: [...data.services,
            { service: currentService._id, amount: 1 }],
        };
      }
      const cartUpdatedToRender = await axios.put(`http://localhost:8001/api/cart/${currentUserCart}`, cartUpdated);
      commit("loadCart", cartUpdatedToRender.data);
    },
    async removeServiceToCart({ commit }:ActionContext<State, State>,
      { currentUserCart, currentService }:{ currentUserCart: string, currentService: Service }) {
      const { data } = await axios.get(`http://localhost:8001/api/cart/${currentUserCart}`);
      let cartUpdated;
      const currentCartServices = data.services;
      const serviceToUpdate = currentCartServices
        .find((services: any) => services.service._id === currentService._id);
      if (serviceToUpdate.amount > 1) {
        serviceToUpdate.amount -= 1;
        cartUpdated = {
          services: currentCartServices,
        };
      } else {
        cartUpdated = {
          services: currentCartServices
            .filter((element:any) => element.service._id !== currentService._id),
        };
      }
      const cartUpdatedToRender = await axios.put(`http://localhost:8001/api/cart/${currentUserCart}`, cartUpdated);
      commit("loadCart", cartUpdatedToRender.data);
    },
    async deleteServiceFromCart({ commit }:ActionContext<State, State>,
      { currentUserCart, currentService }:{ currentUserCart: string, currentService: Service }) {
      const { data } = await axios.get(`http://localhost:8001/api/cart/${currentUserCart}`);
      const currentCartServices = data.services;
      console.log(currentCartServices);
      const cartUpdated = {
        services: currentCartServices
          .filter((element:any) => element.service._id !== currentService._id),
      };
      const cartUpdatedToRender = await axios.put(`http://localhost:8001/api/cart/${currentUserCart}`, cartUpdated);
      commit("loadCart", cartUpdatedToRender.data);
    },
    async fetchCartFromApi({ commit }:ActionContext<State, State>, currentUserCart: string) {
      const { data } = await axios.get(`http://localhost:8001/api/cart/${currentUserCart}`);
      commit('loadCart', data);
    },
    filterServices({ commit }:ActionContext<State, State>, keyword: string) {
      commit('loadKeyword', keyword);
    },
    filterByCategory({ commit }:ActionContext<State, State>, category: string) {
      commit('loadSelectedCategory', category);
    },
    sortByPrice({ commit }:ActionContext<State, State>, sortType: string) {
      commit('loadSortType', sortType);
    },
  },
});
