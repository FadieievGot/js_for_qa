export class AvailableOptions {
    private get root(): WebdriverIO.Element {
        return $('#product').parentElement();
    }

    setDeliveryDate(date) {
        const deliveryDate = this.root.$('.input-group.date');
        expect(deliveryDate).toBeVisible({ message: 'Expected Delivery Date to be visible' });
        const deliveryDateField = this.root.$('[name="option[225]"]');
        deliveryDateField.setValue(date);

        // TODO: add calenadr steps 
        // const calenadr = this.root.$('.fa.fa-calendar');
        // calenadr.waitAndClick();
    }

    addToCart() {
        const addToCartButton = this.root.$('[type="button"]#button-cart');
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' });
        addToCartButton.waitAndClick();
    }


}
