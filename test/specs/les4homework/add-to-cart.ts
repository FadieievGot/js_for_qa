import { App } from "../application/application";
import { DataProvider } from "../data/test-data-provider";

const dataProvider = new DataProvider();

const products = [
    {playerName:'iPod Classic'},
    {playerName:'iPod Nano'},
    {playerName:'iPod Shuffle'},  
    {playerName:'iPod Touch'},     
];

xdescribe('registered user', function () {
    beforeEach(function(){
        const app = new App()
        const user = dataProvider.newUser();

        app.registration.open();
        app.registration.register(user); 
    });

    products.map(data => {
        it(`${data.playerName} can be added to cart by registered user`, function () {
            const app = new App()
            app.home.openAllForCategory('MP3 Players');

            const iPod = app.productCategory.products.find(product => product.title() === data.playerName);
            expect(iPod).toBeDefined();
    
            iPod.addToCart();
            app.productCategory.topLinks.openShoppingCart();

            expect(app.shoppingCart.isNotEmpty()).toBeTruthy;
            expect(app.shoppingCart.haveElement(data.playerName)).toBeTruthy;
        })
    });
 });

 xdescribe('by guest', function () {

    products.map(data => {
        it(`${data.playerName} can be added to cart by guest user`, function () {
            const app = new App()
            app.home.openAllForCategory('MP3 Players');

            const iPod = app.productCategory.products.find(product => product.title() === data.playerName)
            expect(iPod).toBeDefined()
    
            iPod.addToCart();
            app.productCategory.topLinks.openShoppingCart();
            
            expect(app.shoppingCart.isNotEmpty()).toBeTruthy;
            expect(app.shoppingCart.haveElement(data.playerName)).toBeTruthy;
        })
    });
 })