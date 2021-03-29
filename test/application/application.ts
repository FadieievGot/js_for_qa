import { ConfirmationPage } from "./pages/checkout/confirmation.page";
import { CheckoutPage } from "./pages/checkout/index";
import { HomePage } from "./pages/home/home.page";
import { ProductCategoryPage } from "./pages/productCategory.page";
import { RegistrationPage } from "./pages/registration.page";
import { ShoppingCartPage } from "./pages/shoppingCart.page";
import { ProductComparisonPage } from "./pages/productComparison.page";
import { NavigationHelper } from "./pages/navigationHelper";
import { WishListPage } from "./pages/wishList.page";
import {AvailableOptions} from "./pages/components/availableOptions.component";

export class App {
    home: HomePage;
    productCategory: ProductCategoryPage;
    checkout: CheckoutPage;
    confirmation: ConfirmationPage;
    registration: RegistrationPage;
    shoppingCart: ShoppingCartPage;
    productComparison: ProductComparisonPage;
    wishList: WishListPage;
    navigationHelper: NavigationHelper;
    availableOptions: AvailableOptions;


    constructor() {
        this.home = new HomePage();
        this.productCategory = new ProductCategoryPage();
        this.checkout = new CheckoutPage();
        this.confirmation = new ConfirmationPage();
        this.registration = new RegistrationPage();
        this.shoppingCart = new ShoppingCartPage();
        this.productComparison = new ProductComparisonPage();
        this.wishList = new WishListPage();
        this.navigationHelper = new NavigationHelper();
        this.availableOptions = new AvailableOptions();
    }
}