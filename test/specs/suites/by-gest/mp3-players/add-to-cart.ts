import { App } from "../../../application/application";
import constants from "../../../data/constants";

 describe('by guest', function () {

    constants.mp3Players.map(data => {
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
