import state from '@/store/state';

describe('Given a state', () => {
    describe('When is called', () => {
        test('Should be equal to the real state', () => {
            expect(state).toEqual({
                services: [],
                categoryServices: [],
                currentCategory: '',
                currentService: {},
                currentUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : "",
                cart: [],
                keyword: '',
                selectedCategory: '',
                selectedSortPrice: '',
            })
        })
    })
})