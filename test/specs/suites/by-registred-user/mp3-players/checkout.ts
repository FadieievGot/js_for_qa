import { App } from "../../../../application/application";
import { DataProvider } from "../../../../data/test-data-provider";
import constants from "../../../../data/constants";

const dataProvider = new DataProvider();

describe('purchased', function () {

    beforeEach(function(){
        const app = new App();
        const user = dataProvider.newUser();

        app.registration.open();
        app.registration.register(user); 
    });

    constants.mp3Players.map(data => {
        it(`${data.playerName} can be purchased by registred`, function () {
            const app = new App();
            const billing = dataProvider.billingDetailsRegistred();
            
            app.home.openAllForCategory('MP3 Players');

            const iPod = app.productCategory.products.find(product => product.title() === data.playerName);
            expect(iPod).toBeDefined();

            iPod.addToCart();

            app.productCategory.topLinks.openCheckout();

            app.checkout.billingDetails.fillBillingDetailsRegistred(billing);
            app.checkout.billingDetails.continueRegistred();

            app.checkout.deliveryDetails.selectNewAddress();
            app.checkout.deliveryDetails.fillDeliveryDetails(billing);
            app.checkout.deliveryDetails.continueNewAddress();

            app.checkout.deliveryMethod.continue();

            app.checkout.paymentMethod.acceptTermsAndConditions();
            app.checkout.paymentMethod.continue();

            app.checkout.confirmOrder.continue();

            browser.waitUntil(() => app.confirmation.isOpened(), {
                timeoutMsg: "Expected confirmation page to be loaded"
            });
        })
    });
})