export class ShoppingCartPage {
    private get root(): WebdriverIO.Element {
        return $('#checkout-cart');
    }

    isNotEmpty() {
        const content = this.root.$$('#content');
        expect (content).not.toHaveText('Your shopping cart is empty!');
    }

    haveElement(text) {
        const shoppingCart = this.root.$(' td:nth-child(2) > a');
        expect(shoppingCart).toHaveText(text);
    }
}