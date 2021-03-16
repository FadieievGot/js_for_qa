import { CheckoutOptionsComponent } from "../checkout/cmponents/steps/1_checkoutOptions.component";
import { BillingDetailsComponent } from "../checkout/cmponents/steps/2_billingDetails.component";
import { DeliveryMethodComponent } from "../checkout/cmponents/steps/4_deliveryMethod.component";
import { PaymentMethodComponent } from "../checkout/cmponents/steps/5_paymentMethod.component";
import { ConfirmOrderComponent } from "../checkout/cmponents/steps/6_confirmOrder.component";


export class CheckoutPage {

    get checkoutOptions () {
        return new CheckoutOptionsComponent();
    }

    get billingDetails () {
        return new BillingDetailsComponent();
    }

    get deliveryMethod () {
        return new DeliveryMethodComponent();
    }

    get paymentMethod () {
        return new PaymentMethodComponent();
    }

    get confirmOrder () {
        return new ConfirmOrderComponent();
    }


    open() {
        browser.url('index.php?route=checkout/checkout')
    }
}