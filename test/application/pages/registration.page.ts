export class RegistrationPage {
    private content: WebdriverIO.Element;
    constructor() {
        this.content = $('#content');
    }

    open() {
        browser.url('/index.php?route=account/register');
    }

    register(user) {

        browser.execute(function (user) {
            document.querySelector('input#input-firstname').value = user.firstName;
            document.querySelector('input#input-lastname').value = user.lastName;
            document.querySelector('input#input-email').value = user.email;
            document.querySelector('input#input-telephone').value = user.telephone;
            document.querySelector('input#input-password').value = user.password;
            document.querySelector('input#input-confirm').value = user.confirmPasword;

            if (user.acceptTermsAndConditions) {
                document.querySelector('input[type="checkbox"][name="agree"]').click();
            }

        }, user)

        browser.execute(`document.querySelector('input[type="submit"][value="Continue"]').click();`)
        const successMessage = this.content.$('h1');
        expect(successMessage).toHaveText('Your Account Has Been Created!', {
            message: 'Success registration message isn\'t shown, probably a user isn\'t registered'
        })
    }
}
