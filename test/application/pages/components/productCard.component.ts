export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {

    }

    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart');
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' });
        addToCartButton.waitAndClick();
    }

    addToWishList() {
        const addToWishList= this.root.$('button[onclick*="wishlist.add"] i.fa-heart');
        expect(addToWishList).toBeVisible({ message: 'Expected add to wishList button to be visible' });
        addToWishList.waitAndClick();
    }

    compareThisProduct() {
        const addToCompareButton = this.root.$('button[onclick*="compare.add"] i.fa-exchange');
        expect(addToCompareButton).toBeVisible({ message: 'Expected add to compare button to be visible' });
        addToCompareButton.waitAndClick();
    }
}
