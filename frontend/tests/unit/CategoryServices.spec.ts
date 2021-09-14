import {mount} from '@vue/test-utils'
import CategoryServices from '../../src/components/CategoryServices.vue'
import router from '../../src/router'
import state from '../mockedState';


const mockRouter = {
    push: jest.fn(),
  };
  

describe('Given a CategoryServices component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should be the category-services id in the html',()=>{
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

            const wrapper = mount(CategoryServices, {
                global: {
                    mocks: {
                        $router: mockRouter,
                        $store,
                        methods,
                    },
                    plugins: [router]
                }
            });

            const byId = wrapper.find('#category-services')
            expect(byId.element.id).toBe('category-services')
        })
        describe('And the user clicks de detalles button',()=>{
            test('Then scrollToTop should be called',async ()=>{
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
    
                const wrapper = mount(CategoryServices, {
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
                const detailsButton = wrapper.get('[data-test="details-button"]')
                await detailsButton.trigger('click')

                expect(scrollToTop).toHaveBeenCalled();
            })
        })
    })
})
