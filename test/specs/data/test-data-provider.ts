export class DataProvider {
    newUser() {
        const user = {
            firstName: "testfad",
            lastName: 'testfad',
            email: `test+${Date.now()}@test.com`,
            telephone: '0734063429',
            password: '123456789'
        }

        return user;
    }

    billingDetailsGest() {
        const billing = {
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
            address1: 'test',
            city: 'test',
            postCode: '123123',
            country: 'Ukraine',
            region: 'Kyiv'
        }
        return billing;
    }

    billingDetailsRegistred() {
        const billing = {
            firstName: 'testRegistred',
            lastName: 'testRegistred',
            address1: 'testRegistred',
            city: 'testRegistred',
            postCode: '123123',
            country: 'Ukraine',
            region: 'Kyiv'
        }
        return billing;
    }
}