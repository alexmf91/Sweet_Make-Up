/* eslint-disable no-underscore-dangle */
import { ActionContext } from 'vuex';
import axios from 'axios';
import {
  State, RegisterUser, LoginUser,
  Service,
} from '../types/interface';

const actions = {
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
}

  export default actions;