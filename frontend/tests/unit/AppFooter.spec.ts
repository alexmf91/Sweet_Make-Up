import {mount} from '@vue/test-utils'
import AppFooter from '../../src/components/AppFooter.vue'

describe('Given a AppFooter component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should be the Footer html tag',()=>{
            const wrapper = mount(AppFooter)
            expect(wrapper.html()).toContain('<footer>')
        })
    })
})