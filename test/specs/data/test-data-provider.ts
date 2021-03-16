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
}