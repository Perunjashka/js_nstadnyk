const USER = {
    email: '1254569741541@test.com',
    password: 12345678,
    firstName: Alex,
    lastName: Pus,
    Adres1: Street5,
    city: Surrey,
    postCode: 84571455,

   
}


Feature('buy product');


xScenario('login', ({ I }) => {
    I.login(USER);
}).tag("login");

Scenario('buy product', async ({ I, productPage, cartPage }) => {
    I.login(USER);
    I.amOnPage('/index.php?route=product/product&product_id=44 ');
    productPage.selectColor();
    productPage.selectSize();
    const ProductPrice = await productPage.getProductPrice();
    console.log(ProductPrice);
    const totalPrice = await cartPage.getTotalPrice();
    const taxPrice = await cartPage.getTaxPrice();
    I.assertEqual(ProductPrice + taxPrice, totalPrice, "Prices are not in match");
    I.proceedToCheckout();
    I.completeForm(USER);
   
}).tag("buy");
