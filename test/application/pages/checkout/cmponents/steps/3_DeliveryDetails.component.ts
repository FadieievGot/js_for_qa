export class DeliveryDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-address').parentElement()
    }

    fillDeliveryDetails(data: {
        firstName: string,
        lastName: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[BillingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2));
        expect(this.root.$('#input-shipping-firstname')).toBeClickable();
        this.root.$('#input-shipping-firstname').setValue(data.firstName);
        this.root.$('#input-shipping-lastname').setValue(data.lastName);
        this.root.$('#input-shipping-address-1').setValue(data.address1);
        this.root.$('#input-shipping-city').setValue(data.city);
        this.root.$('#input-shipping-postcode').setValue(data.postCode);
        this.root.$('#input-shipping-country').selectByVisibleText(data.country);
        expect(this.root.$('#input-shipping-zone')).toHaveTextContaining(data.region);
        this.root.$('#input-shipping-zone').selectByVisibleText(data.region);
    }


    continueNewAddress() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-shipping-address')
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.waitAndClick()
    }

    selectNewAddress() {
        browser.pause(500)
        const newAddress = this.root.$('input[type="radio"][name="shipping_address"][value="new"]')
        newAddress.waitAndClick()
        expect(newAddress).toBeSelected({ message: 'Expected Continue button to be visible' });
    }
}
