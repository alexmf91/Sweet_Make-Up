import {mount} from '@vue/test-utils'
import SearchBar from '../../src/components/SearchBar.vue'
import state from '../mockedState';

describe('Given a SearchBar component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should be the search-bar html class',()=>{
            const $store = {
                state,
                dispatch: jest.fn(),
                commit: jest.fn(),
                }
                const wrapper = mount(SearchBar, {
                    global: {
                        mocks: {
                            $store,
                        },
                    }
                });
                const byId = wrapper.find('#search-bar')
                expect(byId.element.id).toBe('search-bar')
        })
    })
})