describe('registered user', function () {
    beforeEach(function(){
        browser.url('/index.php?route=account/login');
        const content = $('#content');
        const emailField = content.$('#input-email');
        const passwordField = content.$('#input-password');
        const loginButoon = content.$('[value="Login"]');

        emailField.setValue('testfadComparison@gmail.com');
        passwordField.setValue('1234');
        loginButoon.click();

        expect(browser).toHaveUrlContaining('/account');
        expect(content).toHaveTextContaining('My Account');
    });
 
    let products = [
        {playerOnStore:'.product-thumb [onclick="compare.add(\'48\');"]', playerName:'iPod Classic'},
        {playerOnStore:'.product-thumb [onclick="compare.add(\'36\');"]', playerName:'iPod Nano'},
        {playerOnStore:'.product-thumb [onclick="compare.add(\'34\');"]', playerName:'iPod Shuffle'},  
        {playerOnStore:'.product-thumb [onclick="compare.add(\'32\');"]', playerName:'iPod Touch'},     
    ]
    products.map(data => {
        it(`${data.playerName} can be selected for comparison by registered user`, function () {
            browser.url('/mp3-players');
            const buttonToComparison = $(data.playerOnStore);
            buttonToComparison.click();
            const alertWindow = $('.alert');
            expect(alertWindow).toHaveTextContaining(`Success: You have added ${data.playerName} to your product comparison!`);
            browser.url('/index.php?route=product/compare');
            const comparList = $('#content a strong');
            expect($$('#content')).not.toHaveText('You have not chosen any products to compare.');
            expect(comparList).toHaveText(data.playerName);
        })
    });

    afterEach(function() {
        const removeButton = $('[class="btn btn-danger btn-block"]');
        removeButton.click();
        const emptyWishList = $('#content p');
        expect(emptyWishList).toHaveText('You have not chosen any products to compare.');
        browser.deleteAllCookies();
    });
 });

 describe('by guest', function () {
 
    let products = [
        {playerOnStore:'.product-thumb [onclick="compare.add(\'48\');"]', playerName:'iPod Classic'},
        {playerOnStore:'.product-thumb [onclick="compare.add(\'36\');"]', playerName:'iPod Nano'},
        {playerOnStore:'.product-thumb [onclick="compare.add(\'34\');"]', playerName:'iPod Shuffle'},  
        {playerOnStore:'.product-thumb [onclick="compare.add(\'32\');"]', playerName:'iPod Touch'},     
    ] 

    products.map(data => {
        it(`${data.playerName} can be selected for comparison by registered guest`, function () {
            browser.url('/mp3-players');
            const buttonToComparison = $(data.playerOnStore);
            buttonToComparison.click();
            const alertWindow = $('.alert');
            expect(alertWindow).toHaveTextContaining(`Success: You have added ${data.playerName} to your product comparison!`);
            browser.url('/index.php?route=product/compare');
            const comparList = $('#content a strong');
            expect($$('#content')).not.toHaveText('You have not chosen any products to compare.');
            expect(comparList).toHaveText(data.playerName);
        })
    });
    
    afterEach(function() {
        browser.deleteAllCookies();
    });

 })