import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    services: [],
    categoryServices: [],
    currentCategory: '',
  },
  mutations: {
    loadServices(state, payload) {
      state.services = payload;
    },
    loadCategoryServices(state, payload) {
      state.categoryServices = payload;
    },
    changeCurrentCategory(state, payload) {
      state.currentCategory = payload;
    },
  },
  actions: {
    async fetchServicesFromApi({ commit }) {
      const { data } = await axios.get('http://localhost:8001/api/service');
      commit('loadServices', data);
    },
    async fetchServicesForCategoryFromApi({ commit }, query) {
      const { data } = await axios.get(`http://localhost:8001/api/service/?type=${query}`);
      commit('loadCategoryServices', data);
      commit('changeCurrentCategory', query);
    },
  },
  modules: {
  },
});
