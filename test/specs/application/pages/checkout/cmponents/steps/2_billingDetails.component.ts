export class BillingDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-address').parentElement();
    }

    fillBillingDetailsGest(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[BillingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2));
        expect(this.root.$('#input-payment-firstname')).toBeClickable();
        this.root.$('#input-payment-firstname').setValue(data.firstName);
        this.root.$('#input-payment-lastname').setValue(data.lastName);
        this.root.$('#input-payment-email').setValue(data.email);
        this.root.$('#input-payment-telephone').setValue(data.telephone);
        this.root.$('#input-payment-address-1').setValue(data.address1);
        this.root.$('#input-payment-city').setValue(data.city);
        this.root.$('#input-payment-postcode').setValue(data.postCode);
        this.root.$('#input-payment-country').selectByVisibleText(data.country);
        browser.pause(300);
        this.root.$('#input-payment-zone').selectByVisibleText(data.region);
    }

    fillBillingDetailsRegistred(data: {
        firstName: string,
        lastName: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[BillingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2));
        expect(this.root.$('#input-payment-firstname')).toBeClickable();
        this.root.$('#input-payment-firstname').setValue(data.firstName);
        this.root.$('#input-payment-lastname').setValue(data.lastName);
        this.root.$('#input-payment-address-1').setValue(data.address1);
        this.root.$('#input-payment-city').setValue(data.city);
        this.root.$('#input-payment-postcode').setValue(data.postCode);
        this.root.$('#input-payment-country').selectByVisibleText(data.country);
        browser.pause(300);
        this.root.$('#input-payment-zone').selectByVisibleText(data.region);
    }

    continueGest() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-guest')
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.waitAndClick()
    }

    continueRegistred() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-payment-address')
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.waitAndClick()
    }
}
