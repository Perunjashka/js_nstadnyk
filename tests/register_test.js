const NEW_USER = {
    firstName: 'Alex',
    lastNameField: 22,
    email: Date.now() + '@test.com',
    telephone: 80636262333,
    password: 12345678,
    
}

Feature('register');


Scenario('register new user', ({ I, basePage, accountPage }) => {
    I.amOnPage('/');
    basePage.clickMyAccount();
    basePage.clickRegister();
    accountPage.verifyRegisterAccountPage();
    accountPage.fillNewUserForm(NEW_USER);
    accountPage.submitNewUserForm();
    accountPage.verifySuccessfullRegistration();

   
});
