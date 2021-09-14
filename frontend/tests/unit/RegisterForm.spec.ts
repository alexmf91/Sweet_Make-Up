import {mount} from '@vue/test-utils';
import RegisterForm from '../../src/components/RegisterForm.vue';
import router from '../../src/router'
import state from '../mockedState';

const mockRouter = {
    push: jest.fn(),
  };
  
describe('Given a RegisterForm component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should be the header html tag',()=>{
            const $store = {
                state,
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    register: jest.fn(),
                    scrollToTop: jest.fn(),
                }

                const wrapper = mount(RegisterForm, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
            const byId = wrapper.find('#register-form')
            expect(byId.element.id).toBe('register-form')
        })
        describe('And the submit button is  clicked',()=>{
            test('Then if the register function should be called', async ()=> {
                window.scrollTo = () => null;
                const $store = {
                state,
                actions: {
                    registerUser: jest.fn(),
                },
                methods: {
                    register: jest.fn(),
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    register: jest.fn(),
                    scrollToTop: jest.fn(),
                }

                const wrapper = mount(RegisterForm, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
                const register = jest.fn();
                register();
                const registerButton = wrapper.get('[data-test="register-button"]')
                await registerButton.trigger('submit')

                expect(register).toHaveBeenCalled();
            })
        })
    })
})