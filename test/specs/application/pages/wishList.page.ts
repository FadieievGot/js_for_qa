export class WishListPage {
    private get root(): WebdriverIO.Element {
        return $('#account-wishlist');
    }

    haveElement(text) {
        const shoppingCart = this.root.$('.table-responsive  .text-left a');
        expect(shoppingCart).toHaveText(text);
    }
}