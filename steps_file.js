const { continueButton } = require("./pages/account");

    emailField = {css: "#input-email"};
    passwordField = {css: "#input-password"};
    signInButton = { xpath: '//a[text()="Sign In"]'};
    loginButton = { xpath: '//input[@type="submit"]'};
    myOrdersText = { xpath: '//h2[text()="My Orders"]'};
    addToCartButton = { xpath: '//button[@id="button-cart"]'};
    CartButton = { xpath: '//div[@id="cart"]'};
    checkoutButton = {xpath: '//a[@class="btn-primary btn-r"]'};
    firstNameField = {xpath: '//div/input[@name="firstname"]'};
    lastNamefield = {xpath: '//div/input[@name="lastname"]'};
    address1Field = {xpath: '//div/input[@name="address_1"]'};
    cityField = {xpath: '//div/input[@name="city"]'};
    postCodeField = {xpath: '//div/input[@name="postcode"]'};
    countryField = {xpath : '//div[@id="sbHolder_44325861"]/a[2]'};
    regionStateField = {xpath : '//div[@id="sbHolder_26577242"]/a[2]'};
    selectRegionField = {xpath : '//ul[@id="sbOptions_51230567"]/li[8]/a'};
    continueButton = {xpath : '//input[@id="button-payment-address"]'};
module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login(user) {
      this.amOnPage('/');
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(loginButton);
      this.seeTextEquals( "My Orders", myOrdersText);
    },
    
     proceedToCheckout() {
      this.click(addToCartButton);
      this.click(CartButton);
      this.click(checkoutButton);
     },

     completeForm() {
      this.fillField(firstNameField, user.firstName);
      this.fillField(lastNamefield, user.lastName);
      this.fillField(address1Field, user.Adres1);
      this.fillField(cityField, user.city);
      this.fillField(postCodeField, user.postCode);
      this.click(countryField);
      this.click(regionStateField);
      this.click(selectRegionField);
      this.click(continueButton);
      let button = continueButton.click('Continue');

    for (let i = 0; i < 4; i++) {
    button.click();
   }
     }

     


  });
}
