
// /**
//  - Try to implement as much tests as you can
//  - Do not overload tests with logic, be simple
//  - browser.pause() allowed
//  - copy/paste is allowed
//  - prefer css selectors
//  - don't forget about assertions
//  */

//   // this test gives you 20 points
//   // http://93.126.97.71:10082/index.php?route=account/return/add
//   // Notice that datepicker is optional
//   describe("Product return", function() {
//     it("can be submited", function() {
//         browser.url('/index.php?route=account/return/add');
//         const content = $('#content');
//         content.waitForDisplayed({ timeout: 3000 });

//         //Order Information
//         const firstName = $('#input-firstname');
//         firstName.setValue("Test");

//         const lastName = $('#input-lastname');
//         lastName.setValue('User');

//         //Data Provider 
//         const rundomEmail = `test+${Date.now()}@gmail.com`;

//         const email = $('#input-email');
//         email.setValue(rundomEmail);

//         const phone = $('#input-telephone');
//         phone.setValue('0730102003');

//         const orderId = $('#input-order-id');
//         orderId.setValue('1');

//         //Product Information
//         const productName = $('#input-product');
//         productName.setValue('Samsung Galaxy Tab 10.1');

//         const productCode = $('#input-model');
//         productCode.setValue('SAM1');

//         const reasonForReturnOrderError = $("[name='return_reason_id'][value='2']");
//         reasonForReturnOrderError.click();

//         const productIsOpenedYes = $("[name='opened'][value='1']");
//         productIsOpenedYes.click();

//         const buttons = $('.buttons');
//         const buttonSubmit = buttons.$('[value="Submit"]');
//         buttonSubmit.click();

//         expect(browser).toHaveUrlContaining('/return/success');
//         const successfullMessage = 'Thank you for submitting your return request.';
//         expect(content).toHaveTextContaining(successfullMessage);

//     });
//   });


//   // http://93.126.97.71:10082/index.php?route=account/voucher
//   // this test gives you 20 points
//   describe("Gift Certificate", function() {
//     it("can be purchased", function() {
//         browser.url('index.php?route=account/voucher');
//         const content = $('#content');
        
//         const recepientsName = content.$('#input-to-name');
//         recepientsName.setValue('TestrecepientsName');

//         const recepientsEmail = content.$('#input-to-email');
//         const rundomEmail = `test+${Date.now()}@test.com`;
//         recepientsEmail.setValue(rundomEmail);

//         const yourName = content.$('#input-from-name');
//         yourName.setValue('TestyourName');

//         const yourEmail = content.$('#input-from-email');
//         yourEmail.setValue(rundomEmail);

//         const giftCertificateThemeBirthday = $('[name="voucher_theme_id"][value="6"]');
//         giftCertificateThemeBirthday.click();

//         const buttons = $('.buttons');
//         const refundableCheckBox = buttons.$('[name="agree"]');
//         refundableCheckBox.click();

//         const buttonContinue = buttons.$('[value="Continue"]');
//         buttonContinue.click();

//         expect(browser).toHaveUrlContaining('/voucher/success');
//         const successfullMessage = 'Thank you for purchasing a gift certificate!';
//         expect(content).toHaveTextContaining(successfullMessage);
//     });
// });

//     // this test gives you 20 points
//     // http://93.126.97.71:10082/index.php?route=information/contact
//   describe("Contact us form", function() {
//     it("must send messages to shop administration", function() {
//         browser.url('/index.php?route=information/contact')
//         const content = $('#content');
//         const form = content.$('fieldset');

//         const yourName = form.$('#input-name');
//         yourName.setValue('Test User');

//         const email = form.$('#input-email');
//         const rundomEmail = `test+${Date.now()}@test.com`;
//         email.setValue(rundomEmail);

//         const enquiry = form.$('#input-enquiry');
//         enquiry.setValue('test enquiry');

//         const buttons = $('.buttons');
//         const buttonSubmit = buttons.$('[type="Submit"]');
//         buttonSubmit.click();

//         expect(browser).toHaveUrlContaining('/contact/success');
//         expect(form).not.toExist();
//     });
// });

// // Each implemented test gives you 20 points 
// describe("Items search", function() {
//     it("should show results in case multiple items matches", function() {
//         browser.url('/');
//         const header = $('header');
        
//         const searchInHeader = header.$('[placeholder="Search"]');
//         searchInHeader.setValue('MacBook');

//         const buttonSearchInHeader = header.$('.input-group-btn');
//         buttonSearchInHeader.click();
        
//         expect(browser).toHaveUrlContaining('&search=MacBook');
        
//         expect($$('.product-thumb h4')).toHaveTextContaining('MacBook');
//     });
  
//     it("should redirect to 'no matching results' in case no items matched", function() {
//         browser.url('/');
//         const header = $('header');
        
//         const searchInHeader = header.$('[placeholder="Search"]');
//         searchInHeader.setValue('Android');

//         const buttonSearchInHeader = header.$('.input-group-btn');
//         buttonSearchInHeader.click();
        
//         expect(browser).toHaveUrlContaining('&search=Android');

//         const variants = $$('.product-layout');  
//         expect(variants).not.toExist();

//         const content = $('#content');
//         expect(content).toHaveTextContaining('Products meeting the search criteria');
//     });
//   });