export interface State {
    services: Array <Service> | [] ,
    categoryServices: Object,
    currentCategory: string,
    currentService: Object,
    currentUser: string | Object,
    cart: any, 
    keyword: string,
    selectedCategory: string,
    selectedSortPrice: string,
}

export interface User {
    name: string,
    surname: string,
    phone: string,
    email: string,
    password: string,
    gender: string,
    cart: string,
    bookings: Array<Service>
}
export interface RegisterUser {
    _id: string,
    name: string,
    surname: string,
    phone: string,
    email: string,
    password: string,
}

export interface LoginUser {
    name: string,
    password: string,
}

export interface Service {
    _id: string,
    picture: string,
    name: string,
    description: string,
    duration: string,
    price: number,
    type: string,
}

export interface CartService {
    service: Service,
    amount: number,
    types: string
}
export interface Cart {
    services: Array<CartService> | string,
}