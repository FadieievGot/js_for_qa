xdescribe('Items', function () {

    beforeEach(function(){
        browser.url('/index.php?route=account/login');
        const content = $('#content');
        const emailField = content.$('#input-email');
        const passwordField = content.$('#input-password');
        const loginButoon = content.$('[value="Login"]');

        emailField.setValue('testfadWishList@gmail.com');
        passwordField.setValue('1234');
        loginButoon.click();

        expect(browser).toHaveUrlContaining('/account');
        expect(content).toHaveTextContaining('My Account');
    });

    let products = [
        {playerOnStore:'.product-thumb [onclick="wishlist.add(\'48\');"]', playerName:'iPod Classic'},
        {playerOnStore:'.product-thumb [onclick="wishlist.add(\'36\');"]', playerName:'iPod Nano'},
        {playerOnStore:'.product-thumb [onclick="wishlist.add(\'34\');"]', playerName:'iPod Shuffle'},  
        {playerOnStore:'.product-thumb [onclick="wishlist.add(\'32\');"]', playerName:'iPod Touch'},     
    ]
    products.map(data => {
        it(`${data.playerName} can be added to wishlist`, function () {
            browser.url('/mp3-players');
            const buttonToWishlist = $(data.playerOnStore);
            buttonToWishlist.click();
            const alertWindow = $('.alert');
            expect(alertWindow).toHaveTextContaining(`Success: You have added ${data.playerName} to your wish list!`);
            browser.url('/index.php?route=account/wishlist');
            const wishList = $('.table-responsive  .text-left a');
            expect(wishList).toHaveText(data.playerName);
        })
    });

    afterEach(function() {
        const removeButton = $('[data-original-title="Remove"]');
        removeButton.click();
        const emptyWishList = $('#content p');
        expect(emptyWishList).toHaveText('Your wish list is empty.');
        browser.deleteCookies();
    });
 });