interface State {
    services: [{price: number}] | [] ,
    categoryServices: Object,
    currentCategory: String,
    currentService: Object,
    currentUser: String | Object,
    cart: any, 
    keyword: String,
    selectedCategory: String,
    selectedSortPrice: String,
}

export default State;