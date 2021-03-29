import { CheckoutOptionsComponent } from "./cmponents/steps/1_checkoutOptions.component";
import { BillingDetailsComponent } from "./cmponents/steps/2_billingDetails.component";
import { DeliveryDetailsComponent } from "./cmponents/steps/3_DeliveryDetails.component";
import { DeliveryMethodComponent } from "./cmponents/steps/4_deliveryMethod.component";
import { PaymentMethodComponent } from "./cmponents/steps/5_paymentMethod.component";
import { ConfirmOrderComponent } from "./cmponents/steps/6_confirmOrder.component";



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

    get deliveryDetails () {
        return new DeliveryDetailsComponent();
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