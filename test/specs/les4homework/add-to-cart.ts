describe('registered user', function () {
    beforeEach(function(){
        browser.url('/index.php?route=account/login');
        const content = $('#content');
        const emailField = content.$('#input-email');
        const passwordField = content.$('#input-password');
        const loginButoon = content.$('[value="Login"]');

        emailField.setValue('testfadCart@gmail.com');
        passwordField.setValue('1234');
        loginButoon.click();

        expect(browser).toHaveUrlContaining('/account');
        expect(content).toHaveTextContaining('My Account');
    });
 
    let products = [
        {playerOnStore:'.product-thumb [onclick="cart.add(\'48\', \'1\');"]', playerName:'iPod Classic'},
        {playerOnStore:'.product-thumb [onclick="cart.add(\'36\', \'1\');"]', playerName:'iPod Nano'},
        {playerOnStore:'.product-thumb [onclick="cart.add(\'34\', \'1\');"]', playerName:'iPod Shuffle'},  
        {playerOnStore:'.product-thumb [onclick="cart.add(\'32\', \'1\');"]', playerName:'iPod Touch'},     
    ]
    products.map(data => {
        it(`${data.playerName} can be added to cart by registered user`, function () {
            browser.url('/mp3-players');
            const buttonToCart = $(data.playerOnStore);
            buttonToCart.click();
            const alertWindow = $('.alert');
            expect(alertWindow).toHaveTextContaining(`Success: You have added ${data.playerName} to your shopping cart!`);
            expect($('#cart-total')).toHaveText('1 item(s) - $100.00');
            browser.url('/index.php?route=checkout/cart');
            expect($('#cart-total')).toHaveText('1 item(s) - $100.00');
            expect($$('#content')).not.toHaveText('Your shopping cart is empty!');
            const comparList = $('#checkout-cart td:nth-child(2) > a');
            expect(comparList).toHaveText(data.playerName);
        })
    });

    afterEach(function() {
        const removeButton = $('[data-original-title="Remove"]');
        removeButton.click();
        const emptyWishList = $('#content p');
        expect(emptyWishList).toHaveText('Your shopping cart is empty!');
        browser.deleteAllCookies();
    });
 });

 describe('by guest', function () {
 
    let products = [
        {playerOnStore:'.product-thumb [onclick="cart.add(\'48\', \'1\');"]', playerName:'iPod Classic'},
        {playerOnStore:'.product-thumb [onclick="cart.add(\'36\', \'1\');"]', playerName:'iPod Nano'},
        {playerOnStore:'.product-thumb [onclick="cart.add(\'34\', \'1\');"]', playerName:'iPod Shuffle'},  
        {playerOnStore:'.product-thumb [onclick="cart.add(\'32\', \'1\');"]', playerName:'iPod Touch'},     
    ]
    products.map(data => {
        it(`${data.playerName} can be added to cart by registered user`, function () {
            browser.url('/mp3-players');
            const buttonToCart = $(data.playerOnStore);
            buttonToCart.click();
            const alertWindow = $('.alert');
            expect(alertWindow).toHaveTextContaining(`Success: You have added ${data.playerName} to your shopping cart!`);
            expect($('#cart-total')).toHaveText('1 item(s) - $122.00');
            browser.url('/index.php?route=checkout/cart');
            expect($('#cart-total')).toHaveText('1 item(s) - $122.00');
            expect($$('#content')).not.toHaveText('Your shopping cart is empty!');
            const comparList = $('#checkout-cart td:nth-child(2) > a');
            expect(comparList).toHaveText(data.playerName);
        })
    });

    afterEach(function() {
        browser.deleteAllCookies();
    });

 })