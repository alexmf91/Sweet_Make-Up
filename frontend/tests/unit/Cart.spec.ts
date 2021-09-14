import {mount} from '@vue/test-utils';
import Cart from '../../src/views/Cart.vue';
import router from '../../src/router'
import state from '../mockedState';
import toast from 'vue-dk-toast';


const mockRouter = {
    push: jest.fn(),
  };
  
describe('Given a Cart component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should be the cart id in the html',()=>{
            const $store = {
                state,
                getters: {
                    calculateCartQuantityItems: jest.fn(),
                    getCartServices: [ {service: {
                        name: 'TheName',
                        picture: 'ThePicture',
                        price: 'ThePrice',
                    }}],
                    calculateTotalCartPrice: jest.fn()
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    calculateSubtotalPrice: jest.fn(),
                    removeFromCart: jest.fn(),
                    addToCart: jest.fn(),
                    deleteFromCart: jest.fn(),
                }

                const wrapper = mount(Cart, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
                const byId = wrapper.find('#cart')
                expect(byId.element.id).toBe('cart')
        })
        describe('And the delete button is clicked',()=>{
            test('Then the deleteFromCart function should be called', async ()=> {
                const $store = {
                state,
                getters: {
                    calculateCartQuantityItems: jest.fn(),
                    getCartServices: [ {service: {
                        name: 'TheName',
                        picture: 'ThePicture',
                        price: 'ThePrice',
                    }}],
                    calculateTotalCartPrice: jest.fn()
                },
                actions: {
                    fetchCartFromApi: jest.fn(),
                    deleteServiceFromCart: jest.fn(),
                },
                methods: {
                    calculateSubtotalPrice: jest.fn(),
                    deleteServiceFromCart: jest.fn()
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }

                const wrapper = mount(Cart, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                        },
                        plugins: [router,toast]
                    }
                });
                const deleteButton = wrapper.get('[data-test="delete-from-cart-button"]')
                await deleteButton.trigger('click')
                const deleteServiceFromCart = jest.fn();
                deleteServiceFromCart();
                expect(deleteServiceFromCart).toHaveBeenCalled();
            })
        })
        describe('And the remove button is clicked',()=>{
            test('Then the removeFromCart function should be called', async ()=> {
                const $store = {
                state,
                getters: {
                    calculateCartQuantityItems: jest.fn(),
                    getCartServices: [ {service: {
                        name: 'TheName',
                        picture: 'ThePicture',
                        price: 'ThePrice',
                    }}],
                    calculateTotalCartPrice: jest.fn()
                },
                actions: {
                    fetchCartFromApi: jest.fn(),
                    removeServiceToCart: jest.fn(),
                },
                methods: {
                    calculateSubtotalPrice: jest.fn(),
                    removeFromCart: jest.fn()
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }

                const wrapper = mount(Cart, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                        },
                        plugins: [router,toast]
                    }
                });
                const removeButton = wrapper.get('[data-test="remove-from-cart-button"]')
                await removeButton.trigger('click')
                const removeServiceToCart = jest.fn();
                removeServiceToCart();
                expect(removeServiceToCart).toHaveBeenCalled();
            })
        })
        describe('And the add button is clicked',()=>{
            test('Then the addFromCart function should be called', async ()=> {
                const $store = {
                state,
                getters: {
                    calculateCartQuantityItems: jest.fn(),
                    getCartServices: [ {service: {
                        name: 'TheName',
                        picture: 'ThePicture',
                        price: 'ThePrice',
                    }}],
                    calculateTotalCartPrice: jest.fn()
                },
                actions: {
                    fetchCartFromApi: jest.fn(),
                    addServiceToCart: jest.fn(),
                },
                methods: {
                    calculateSubtotalPrice: jest.fn(),
                    addToCart: jest.fn(),
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }

                const wrapper = mount(Cart, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                        },
                        plugins: [router,toast]
                    }
                });
                const addButton = wrapper.get('[data-test="add-from-cart-button"]')
                await addButton.trigger('click')
                const addServiceToCart = jest.fn();
                addServiceToCart();
                expect(addServiceToCart).toHaveBeenCalled();
            })
        })
    })
})
