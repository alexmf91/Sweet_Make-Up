import {mount} from '@vue/test-utils'
import AppAboutBrand from '../../src/components/AppAboutBrand.vue'

describe('Given an AppAboutBrand component',()=>{
    describe('When the component is rendered',()=>{
        test('Then should be the about id in a html tag',()=>{
            const wrapper = mount(AppAboutBrand)
            const byId = wrapper.find('#about')
            expect(byId.element.id).toBe('about')
        })
    })
})
