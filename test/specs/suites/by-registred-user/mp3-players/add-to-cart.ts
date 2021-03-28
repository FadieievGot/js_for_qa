import { App } from "../../../application/application";
import { DataProvider } from "../../../data/test-data-provider";
import constants from "../../../data/constants";

const dataProvider = new DataProvider();

describe('registered user', function () {
    beforeEach(function(){
        const app = new App()
        const user = dataProvider.newUser();

        app.registration.open();
        app.registration.register(user);
    });

    constants.mp3Players.map(data => {
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

    it(`Can be added to cart 2 players by registered user`, function () {
        const app = new App()
        app.home.openAllForCategory('MP3 Players');

        const iPod0 = app.productCategory.products.find(product => product.title() === constants.mp3Players[0].playerName);
        expect(iPod0).toBeDefined();

        iPod0.addToCart();

        browser.pause(3000);
        const iPod1 = app.productCategory.products.find(product => product.title() === constants.mp3Players[1].playerName);
        expect(iPod1).toBeDefined();

        iPod1.addToCart();

        app.productCategory.topLinks.openShoppingCart();

        expect(app.shoppingCart.isNotEmpty()).toBeTruthy;
        expect(app.shoppingCart.haveTwoElements()).toBeTruthy;
    })
});
