import mutations from '../../../src/store/mutations';
import {State} from '../../../src/types/interface';
import state from '../../mockedState';

let mockedState: State;

beforeEach(() => {
    mockedState = state;
});
describe('Given a loadServices mutation', () => {
    test('Should load and update services state ', () => {
        const payload =  [
            {
             _id:"6135cec0464783204dfe5612",
             picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
             name:"Maquillaje",
             description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
             duration:"120",
             type:"make_up_and_hairstyles",
             price:80
            },
            {
             _id:"6135cec0464783204dfe5612",
             picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
             name:"Peinado",
             description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
             duration:"120",
             type:"make_up_and_hairstyles",
             price:80
            },
        ]
        mutations.loadServices(mockedState, payload);

        expect(mockedState.services).toStrictEqual([
            {
                _id:"6135cec0464783204dfe5612",
                picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
                name:"Maquillaje",
                description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
                duration:"120",
                type:"make_up_and_hairstyles",
                price:80
               },
               {
                _id:"6135cec0464783204dfe5612",
                picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
                name:"Peinado",
                description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
                duration:"120",
                type:"make_up_and_hairstyles",
                price:80
               },
        ])
    })
})

describe('Given a loadCategoryServices mutation', () => {
    test('Should load and update categoryServices  state ', () => {
        const payload =  [
            {
             _id:"6135cec0464783204dfe5612",
             picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
             name:"Maquillaje",
             description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
             duration:"120",
             type:"make_up_and_hairstyles",
             price:80
            },
            {
             _id:"6135cec0464783204dfe5612",
             picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
             name:"Peinado",
             description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
             duration:"120",
             type:"make_up_and_hairstyles",
             price:80
            },
        ]
        mutations.loadCategoryServices(mockedState, payload);

        expect(mockedState.categoryServices ).toStrictEqual([
            {
                _id:"6135cec0464783204dfe5612",
                picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
                name:"Maquillaje",
                description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
                duration:"120",
                type:"make_up_and_hairstyles",
                price:80
               },
               {
                _id:"6135cec0464783204dfe5612",
                picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
                name:"Peinado",
                description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
                duration:"120",
                type:"make_up_and_hairstyles",
                price:80
               },
        ])
    })
})

describe('Given a changeCurrentCategory mutation', () => {
    test('Should load and update currentCategory state ', () => {
        const payload = "MakeUp"
        mutations.changeCurrentCategory(mockedState, payload);

        expect(mockedState.currentCategory  ).toStrictEqual("MakeUp")
    })
})

describe('Given a loadOneService mutation', () => {
    test('Should load and update currentService state ', () => {
        const payload = {
             _id:"6135cec0464783204dfe5612",
             picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
             name:"Maquillaje",
             description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
             duration:"120",
             type:"make_up_and_hairstyles",
             price:80
            }

        mutations.loadOneService(mockedState, payload);

        expect(mockedState.currentService).toStrictEqual({
            _id:"6135cec0464783204dfe5612",
            picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
            name:"Maquillaje",
            description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
            duration:"120",
            type:"make_up_and_hairstyles",
            price:80
            }
        )
    })
})

describe('Given a loadUser mutation', () => {
    test('Should load and update currentUser  state ', () => {
        const payload = {
            _id:"612cecf6a7b929f51af44790",
            bookings:[],
            cart:"612cec70a7b929f51af4478a",
            email:"mireia@leon.com",
            gender:"Female",
            phone:'45',
            name:"Mireia",
            password:"12345",
            picture:"https://i.pinimg.com/originals/e7/cd/21/e7cd217265a2a8f03484820eb893c070.jpg",
            surname:"Leon",
        }
        mutations.loadUser(mockedState, payload);

        expect(mockedState.currentUser ).toStrictEqual({
            _id:"612cecf6a7b929f51af44790",
            bookings:[],
            cart:"612cec70a7b929f51af4478a",
            email:"mireia@leon.com",
            gender:"Female",
            phone:'45',
            name:"Mireia",
            password:"12345",
            picture:"https://i.pinimg.com/originals/e7/cd/21/e7cd217265a2a8f03484820eb893c070.jpg",
            surname:"Leon",
        }
        )
    })
})

describe('Given a emptyUser mutation', () => {
    test('Should load and update currentUser  state ', () => {
        const payload = "hola"
        mutations.emptyUser(mockedState, payload);

        expect(mockedState.currentUser ).toStrictEqual("hola")
    })
})

describe('Given a loadCart mutation', () => {
    test('Should load and update cart state ', () => {
        const payload = {services: [{
            service:             {
                _id:"6135cec0464783204dfe5612",
                picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
                name:"Maquillaje",
                description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
                duration:"120",
                type:"make_up_and_hairstyles",
                price:80
               },
            amount: 2,
            types: "String"
        }]}
        mutations.loadCart(mockedState, payload);

        expect(mockedState.cart).toStrictEqual({services: [{
            service:{
                _id:"6135cec0464783204dfe5612",
                picture:"https://i.ibb.co/r53cmdd/1626077210.jpg",
                name:"Maquillaje",
                description:"Servicio de Maquillaje Social para fiestas y eventos intenso o natural teniendo en cuenta el tipo de evento, el vestido, el peinado y tu estilo para crear un look perfecto.",
                duration:"120",
                type:"make_up_and_hairstyles",
                price:80
               },
            amount: 2,
            types: "String"
        }]}
        )
    })
})

describe('Given a loadKeyword mutation', () => {
    test('Should load and update keyword state ', () => {
        const payload = "hola"
        mutations.loadKeyword(mockedState, payload);

        expect(mockedState.keyword).toStrictEqual("hola")
    })
})

describe('Given a loadSelectedCategory mutation', () => {
    test('Should load and update selectedCategory state ', () => {
        const payload = "hola"
        mutations.loadSelectedCategory(mockedState, payload);

        expect(mockedState.selectedCategory).toStrictEqual("hola")
    })
})

describe('Given a loadSortType mutation', () => {
    test('Should load and update selectedSortPrice state ', () => {
        const payload = "hola"
        mutations.loadSortType(mockedState, payload);

        expect(mockedState.selectedSortPrice).toStrictEqual("hola")
    })
})
