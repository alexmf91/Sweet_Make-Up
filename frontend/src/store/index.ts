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
    cart: '',
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
      await axios.post('http://localhost:8001/api/register', user);
      commit("");
    },
    async loginUser({ commit }, user) {
      const { data } = await axios.post('http://localhost:8001/api/login', user);
      console.log(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      commit("loadUser", data.user);
    },
    userLogOut({ commit }) {
      const noUser = '';
      commit("emptyUser", noUser);
    },
    async addServiceToCart({ commit }, service) {
      commit("updateCart", service);
    },
  },
  modules: {
  },
});
