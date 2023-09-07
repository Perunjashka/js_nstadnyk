const USER = {
    email: '1254569741541@test.com',
    password: 12345678,
    firstName: "Nata",
    lastName: "Syda",
    Adres1: "Street12l",
    city: "Surrey",
    postCode: 845715466,

}
Feature('buy product');


Scenario('buy product', async ({ I, productPage, cartPage }) => {

    I.login(USER);
    I.amOnPage('/index.php?route=product/product&product_id=44 ');

    productPage.selectColor();
    productPage.selectSize();
    const productPrice = await productPage.getProductPrice();
    console.log(productPrice);

    I.proceedToCheckout();
    I.completeForm(USER);

    const totalPrice = await cartPage.getTotalPrice();
    const taxPrice = await cartPage.getTaxPrice();
    const flatShippingRatePrice = await cartPage.getflatShippingRatePrice();
    const vatPrice = await cartPage.getvatPrice();
    I.assertEqual((productPrice + taxPrice + flatShippingRatePrice + vatPrice), totalPrice, "Prices are not in match");
    const numOfElementsCart = await I.grabNumberOfVisibleElements({ xpath: '//div[@id="cart"]' });
    console.log(numOfElementsCart);
}).tag("buy");
