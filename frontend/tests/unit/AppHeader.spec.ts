import {mount} from '@vue/test-utils'
import AppHeader from '../../src/components/AppHeader.vue'

describe('Given a AppHeader component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should render the header html tag',()=>{
            const wrapper = mount(AppHeader)
            expect(wrapper.html()).toContain('<header>')
        })
    })
})