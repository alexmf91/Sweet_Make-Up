import {mount} from '@vue/test-utils';
import AppHeader from '../../src/components/AppHeader.vue';
import router from '../../src/router'
import state from '../mockedState';


const mockRouter = {
    push: jest.fn(),
  };
  
describe('Given a AppHeader component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should be the header html tag',()=>{
            const $store = {
                state,
                getters: {
                    calculateCartQuantityItems: jest.fn(),
                    getCartServices: jest.fn(),
                    calculateTotalCartPrice: jest.fn()
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    logOut: jest.fn(),
                    scrollToTop: jest.fn(),
                }

                const wrapper = mount(AppHeader, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
            expect(wrapper.html()).toContain('<header>')
        })

        describe('And the main-logo is clicked',()=>{
            test('Then the scrollToTop function should be callled', async ()=> {
                window.scrollTo = () => null;
                const $store = {
                state,
                getters: {
                    calculateCartQuantityItems: jest.fn(),
                    getCartServices: jest.fn(),
                    calculateTotalCartPrice: jest.fn()
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    logOut: jest.fn(),
                    scrollToTop: jest.fn(),
                }

                const wrapper = mount(AppHeader, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
                const scrollToTop = jest.fn();
                scrollToTop();
                const mainLogo = wrapper.get('[data-test="main-logo"]')
                await mainLogo.trigger('click')

                expect(scrollToTop).toHaveBeenCalled();
            })
        })
        describe('And the logOut is  clicked',()=>{
            test('Then the logOut function should be called', async ()=> {
                window.scrollTo = () => null;
                const $store = {
                state,
                getters: {
                    calculateCartQuantityItems: jest.fn(),
                    getCartServices: jest.fn(),
                    calculateTotalCartPrice: jest.fn()
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    logOut: jest.fn(),
                    scrollToTop: jest.fn(),
                }

                const wrapper = mount(AppHeader, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
                const logOut = jest.fn();
                logOut();
                const logOutButton = wrapper.get('[data-test="logOut-button"]')
                await logOutButton.trigger('click')

                expect(logOut).toHaveBeenCalled();
            })
        })
    })
})