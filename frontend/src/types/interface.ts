export interface State {
    services: Array <Service> | [] ,
    categoryServices: Object,
    currentCategory: String,
    currentService: Object,
    currentUser: String | Object,
    cart: any, 
    keyword: String,
    selectedCategory: String,
    selectedSortPrice: String,
}

export interface User {
    name: String,
    surname: String,
    phone: String,
    email: String,
    password: String,
    gender: String,
    cart: String,
    bookings: Array<Service>
}
export interface RegisterUser {
    _id: String,
    name: String,
    surname: String,
    phone: String,
    email: String,
    password: String,
}

export interface LoginUser {
    name: String,
    password: String,
}

export interface Service {
    _id: String,
    picture: String,
    name: String,
    description: String,
    duration: String,
    price: Number,
    type: String,
}

export interface CartService {
    service: Service,
    amount: Number,
    types: String
}
export interface Cart {
    services: Array<CartService> | String,
}