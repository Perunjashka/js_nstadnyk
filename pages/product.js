const { I } = inject();

module.exports = {
    colorDropDown: { xpath: '(//label[text()="Color"]/following-sibling::div/a)[1]' },
    sizeDropDown: { xpath: '(//label[text()="Size"]/following-sibling::div/a)[1]' },
    colorOption: { xpath: '(//label[text()="Color"]/following-sibling::div/ul/li)[2]' },
    sizeOption: { xpath: '(//label[text()="Size"]/following-sibling::div/ul/li)[2]' },
    productPriceText: { xpath: '//div/span[@class="price-new"]' },
    TaxPrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[3]/td[2]' },
    flatShippingRatePrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[2]/td[2]' },
    vatPrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[4]/td[2]' },
    totalPrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[5]/td[2]' },
    selectColor() {
        I.click(this.colorDropDown);
        I.click(this.colorOption);
    },

    async getProductPrice() {
        const draftProductPrice = await I.grabTextFrom(this.productPriceText);
        const draftColorPrice = await I.grabTextFrom(this.colorOption);
        const draftSizePrice = await I.grabTextFrom(this.sizeOption);

        const ProductPrice = parseFloat(draftColorPrice.replace(/[^0-9\.]/g, "")) + parseFloat(draftSizePrice.replace(/[^0-9\.]/g, "")) + parseFloat(draftProductPrice.slice(1));
        console.log(ProductPrice)

    },

    selectSize() {
        I.click(this.sizeDropDown),
            I.click(this.sizeOption)
    },

}