import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    services: [],
  },
  mutations: {
    loadServices(state, payload) {
      state.services = payload;
    },
  },
  actions: {
    async fetchServicesFromApi({ commit }) {
      const { data } = await axios.get('http://localhost:8001/api/service');
      console.log(data);
      commit('loadServices', data);
    },
  },
  modules: {
  },
});
