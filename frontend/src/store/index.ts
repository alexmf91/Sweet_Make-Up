/* eslint-disable no-underscore-dangle */
import { createStore } from 'vuex';
import axios from 'axios';
import State from '../types/interface';

export default createStore({
  state: {
    services: [],
    categoryServices: [],
    currentCategory: '',
    currentService: {},
    currentUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : "",
    cart: [],
  },
  mutations: {
    loadServices(state: State, payload) {
      state.services = payload;
    },
    loadCategoryServices(state: State, payload) {
      state.categoryServices = payload;
    },
    changeCurrentCategory(state: State, payload) {
      state.currentCategory = payload;
    },
    loadOneService(state: State, payload) {
      state.currentService = payload;
    },
    loadUser(state: State, payload) {
      state.currentUser = payload;
    },
    emptyUser(state, payload) {
      state.currentUser = payload;
    },
    updateCart(state: State, payload) {
      state.cart = [...state.cart, payload];
    },
    loadCart(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    async fetchServicesFromApi({ commit }) {
      const { data } = await axios.get('http://localhost:8001/api/service');
      commit('loadServices', data);
    },
    async fetchServicesForCategoryFromApi({ commit }, query: string) {
      const { data } = await axios.get(`http://localhost:8001/api/service/?type=${query}`);
      commit('loadCategoryServices', data);
      commit('changeCurrentCategory', query);
    },
    async fetchOneServiceForNameFromApi({ commit }, query: string) {
      const { data } = await axios.get(`http://localhost:8001/api/service/?name=${query}`);
      commit('loadOneService', data[0]);
    },
    async registerUser({ commit }, user) {
      const userCart = await axios.post('http://localhost:8001/api/cart');
      const userWithCart = { ...user, cart: userCart.data._id };
      await axios.post('http://localhost:8001/api/register', userWithCart);
      localStorage.setItem("user", JSON.stringify(userWithCart));
      commit("loadUser", userWithCart);
    },
    async loginUser({ commit }, user) {
      const { data } = await axios.post('http://localhost:8001/api/login', user);
      localStorage.setItem("user", JSON.stringify(data.user));
      commit("loadUser", data.user);
    },
    userLogOut({ commit }) {
      const noUser = '';
      commit("emptyUser", noUser);
    },
    async addServiceToCart({ commit }, { currentUserCart, currentService }) {
      const { data } = await axios.get(`http://localhost:8001/api/cart/${currentUserCart}`);
      let cartUpdated;
      const currentCartServices = data.services;
      if (currentCartServices.some((element: any) => element
        .service === currentService._id)) {
        cartUpdated = {
          services: currentCartServices
            .map((element: any) => (element.service === currentService._id
              ? { ...element, amount: element.amount + 1 }
              : element)),
        };
      } else {
        cartUpdated = {
          services: [...data.services,
            { service: currentService._id, amount: 1 }],
        };
      }
      await axios.put(`http://localhost:8001/api/cart/${currentUserCart}`, cartUpdated);
      commit("loadCart", currentService);
    },
  },
  modules: {
  },
});
