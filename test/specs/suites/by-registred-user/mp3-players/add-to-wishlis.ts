import { App } from "../../../../application/application";
import { DataProvider } from "../../../../data/test-data-provider";
import constants from "../../../../data/constants";

const dataProvider = new DataProvider();


describe('registered user', function () {
    beforeEach(function(){
        const app = new App()
        const user = dataProvider.newUser();

        app.registration.open();
        app.registration.register(user);
    });

    constants.mp3Players.map(data => {
        it(`${data.playerName} can be added to wishlist`, function () {

            const app = new App()
            app.home.openAllForCategory('MP3 Players');

            const iPod = app.productCategory.products.find(product => product.title() === data.playerName);
            expect(iPod).toBeDefined();

            iPod.addToWishList();
            app.productCategory.topLinks.openWishList();

            app.wishList.haveElement(data.playerName);
        })
    });
 });
