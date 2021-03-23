import { App } from "../application/application";
import { DataProvider } from "../data/test-data-provider";

const dataProvider = new DataProvider();

describe('purchased', function () {

    it('can be purchased by gest', function () {
        const app = new App();
        const billing = dataProvider.billingDetailsGest();

        app.home.openAllForCategory('MP3 Players');

        const iPodShuffle = app.productCategory.products.find(product => product.title() === 'iPod Shuffle');
        expect(iPodShuffle).toBeDefined();

        iPodShuffle.addToCart();

        app.productCategory.topLinks.openCheckout();

        app.checkout.checkoutOptions.selectGuestCheckout();
        app.checkout.checkoutOptions.continue();

        app.checkout.billingDetails.fillBillingDetailsGest(billing);
        app.checkout.billingDetails.continueGest();

        app.checkout.deliveryMethod.continue();

        app.checkout.paymentMethod.acceptTermsAndConditions();
        app.checkout.paymentMethod.continue();

        app.checkout.confirmOrder.continue();

        browser.waitUntil(() => app.confirmation.isOpened(), {
            timeoutMsg: "Expected confirmation page to be loaded"
        });
    })
})
