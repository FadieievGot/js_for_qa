export class TopLinks {
    private get root(): WebdriverIO.Element {
        return $('nav#top');
    }

    openCheckout() {
        const checkoutButton = this.root.$('a[title="Checkout"]');
        expect(checkoutButton).toBeVisible();
        checkoutButton.click();
    }

    openShoppingCart() {
        const shoppingCartButton = this.root.$('a[title="Shopping Cart"]');
        expect(shoppingCartButton).toBeVisible();
        shoppingCartButton.click();
    }

    openWishList() {
        const wishListButton = this.root.$('#wishlist-total');
        expect(wishListButton).toBeVisible();
        wishListButton.click();
    }


}