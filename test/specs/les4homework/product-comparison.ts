import { App } from "../application/application";
import { DataProvider } from "../data/test-data-provider";

const dataProvider = new DataProvider();

const products = [
    {playerName:'iPod Classic'},
    {playerName:'iPod Nano'},
    {playerName:'iPod Shuffle'},  
    {playerName:'iPod Touch'},     
];

describe('registered user', function () {
    beforeEach(function(){
        const app = new App()
        const user = dataProvider.newUser();

        app.registration.open();
        app.registration.register(user); 
    });

    products.map(data => {
        it(`${data.playerName} can be selected for comparison by registered user`, function () {
            const app = new App()
            app.home.openAllForCategory('MP3 Players');

            const iPod = app.productCategory.products.find(product => product.title() === data.playerName);
            expect(iPod).toBeDefined();
            
            iPod.compareThisProduct();

            app.navigationHelper.goToProductComparisonPage();
            
            const comparList = $('#content a strong');
            expect($$('#content')).not.toHaveText('You have not chosen any products to compare.');
            expect(comparList).toHaveText(data.playerName);
        })
    });
 });

 xdescribe('by guest', function () {

    products.map(data => {
        it(`${data.playerName} can be selected for comparison by registered guest`, function () {
            browser.url('/mp3-players');
            const buttonToComparison = $(data.playerName);
            buttonToComparison.click();
            const alertWindow = $('.alert');
            expect(alertWindow).toHaveTextContaining(`Success: You have added ${data.playerName} to your product comparison!`);
            browser.url('/index.php?route=product/compare');
            const comparList = $('#content a strong');
            expect($$('#content')).not.toHaveText('You have not chosen any products to compare.');
            expect(comparList).toHaveText(data.playerName);
        })
    });
    
 })