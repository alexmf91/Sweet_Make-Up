const state = {
  services: [],
  categoryServices: [],
  currentCategory: '',
  currentService: {},
  currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : '',
  cart: [],
  keyword: '',
  selectedCategory: '',
  selectedSortPrice: '',
};

export default state;
