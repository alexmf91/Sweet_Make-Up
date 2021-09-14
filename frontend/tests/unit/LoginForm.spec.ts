import {mount} from '@vue/test-utils';
import LoginForm from '../../src/components/LoginForm.vue';
import router from '../../src/router'
import state from '../mockedState';


const mockRouter = {
    push: jest.fn(),
  };
  
describe('Given a LoginForm component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should be the header html tag',()=>{
            const $store = {
                state,
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    login: jest.fn(),
                    scrollToTop: jest.fn(),
                }

                const wrapper = mount(LoginForm, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
            const byId = wrapper.find('#login-form')
            expect(byId.element.id).toBe('login-form')
        })
        describe('And the submit button is  clicked',()=>{
            test('Then the login function should be called', async ()=> {
                window.scrollTo = () => null;
                const $store = {
                state,
                actions: {
                    loginUser: jest.fn(),
                },
                methods: {
                    login: jest.fn(),
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    login: jest.fn(),
                    scrollToTop: jest.fn(),
                }

                const wrapper = mount(LoginForm, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
                const login = jest.fn();
                login();
                const loginButton = wrapper.get('[data-test="login-button"]')
                await loginButton.trigger('submit')

                expect(login).toHaveBeenCalled();
            })
                        test('Then the login function should be called', async ()=> {
                window.scrollTo = () => null;
                const $store = {
                state,
                actions: {
                    loginUser: jest.fn(),
                },
                methods: {
                    login: jest.fn(),
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const methods = {
                    login: jest.fn(),
                    scrollToTop: jest.fn(),
                }

                const wrapper = mount(LoginForm, {
                    global: {
                        mocks: {
                            $router: mockRouter,
                            $store,
                            methods,
                        },
                        plugins: [router]
                    }
                });
                const login = jest.fn();
                login();
                const loginButton = wrapper.get('[data-test="login-button"]')
                await loginButton.trigger('submit')

                expect(login).toHaveBeenCalled();
            })
        })
    })
})