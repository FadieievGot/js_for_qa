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

    constants.laptops.map(data => {
        it(`${data.playerName} can be added to cart by registered user`, function () {
            const app = new App()
            app.home.openAllForCategory('Laptops & Notebooks');

            const camera = app.productCategory.products.find(product => product.title() === data.playerName);
            expect(camera).toBeDefined();

            camera.addToCart();
            app.availableOptions.setDeliveryDate('2011-05-19');
            app.availableOptions.addToCart();
            app.productCategory.topLinks.openShoppingCart();
            expect(app.shoppingCart.isNotEmpty()).toBeTruthy;
            expect(app.shoppingCart.haveElement(data.playerName)).toBeTruthy;
        })
    });
});
