//const continueButton= require("./pages/account");

const languageButton = { xpath: '//*[@id="form-language"]/div/span' };
const engLanguageButton = { xpath: '//*[@id="form-language"]/div/ul/li[1]/button' };
const emailField = { css: "#input-email" };
const passwordField = { css: "#input-password" };
const signInButton = { xpath: '//a[text()="Sign In"]' };
const loginButton = { xpath: '//input[@type="submit"]' };
const myOrdersText = { xpath: '//h2[text()="My Orders"]' };
const addToCartButton = { xpath: '//button[@id="button-cart"]' };
const buttonCart = { xpath: '//div[@id="cart"]' };
const checkoutButton = { xpath: '//a[@class="btn-primary btn-r"]' };
const firstNameField = { xpath: '//div/input[@name="firstname"]' };
const lastNamefield = { xpath: '//div/input[@name="lastname"]' };
const address1Field = { xpath: '//div/input[@name="address_1"]' };
const cityField = { xpath: '//div/input[@name="city"]' };
const postCodeField = { xpath: '//div/input[@name="postcode"]' };
const countryField = { xpath: '//div[@class="col-sm-10"]/div/a[contains(text(), "United Kingdom")]' };
const selectCountry = { xpath: '//ul[@class="sbOptions"]/li/a[contains (text(), "United Kingdom")]' };
const regionStateField = { xpath: '//div[@class="col-sm-10"]/div/a[contains (text(), " --- Please Select --- ")]' };
const selectRegionField = { xpath: '//ul[@class="sbOptions"]/li/a[contains(text(), "Berkshire")]' };
const continueButton = { xpath: '//div[@class="buttons clearfix"]/div/input' };
const continueButton2 = { xpath: '//input[@id="button-shipping-address"]' };
const continueButton3 = { xpath: '//input[@id="button-shipping-method"]' };
const continueButton4 = { xpath: '//input[@id="button-payment-method"]' };
const newAddressButton = { xpath: '//label[@for="payment_addressnew1"]' };
const agreeTermsConditionsButton = { xpath: '//input[@id="agree1"]' };
const confirmButton = { xpath: '//input[@id="button-confirm"]' };
module.exports = function () {
  return actor({


    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login(user) {
      this.amOnPage('/');
      this.click(languageButton);
      this.click(engLanguageButton);
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(loginButton);
      this.seeTextEquals("My Orders", myOrdersText);
    },

    proceedToCheckout() {
      this.click(addToCartButton);
      this.click(buttonCart);
      this.click(checkoutButton);
    },

    completeForm(user) {
      this.click(newAddressButton);
      this.fillField(firstNameField, user.firstName);
      this.fillField(lastNamefield, user.lastName);
      this.fillField(address1Field, user.Adres1);
      this.fillField(cityField, user.city);
      this.fillField(postCodeField, user.postCode);
      this.click(countryField);
      this.click(selectCountry);
      this.click(regionStateField);
      this.click(selectRegionField);
      this.click(continueButton);
      this.click(continueButton2);
      this.click(continueButton3);
      this.click(agreeTermsConditionsButton);
      this.click(continueButton4);
      this.click(confirmButton);

    }

  });
  
}
