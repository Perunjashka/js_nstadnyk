const { I } = inject();

module.exports = {
colorDropDown: { xpath: '(//label[text()="Color"]/following-sibling::div/a)[1]'},
sizeDropDown: { xpath: '(//label[text()="Size"]/following-sibling::div/a)[1]'},
colorOption: { xpath: '(//label[text()="Color"]/following-sibling::div/ul/li)[2]'},
sizeOption: { xpath: '(//label[text()="Size"]/following-sibling::div/ul/li)[2]'},
productPriceText: { xpath: '//div/span[@class="price-new"]'},

selectColor() {
    I.click (this.colorDropDown);
    I.click (this.colorOption);
 },

 async getProductPrice() {
    const  draftProductPrice = await I.grabTextFrom (this.productPriceText);
    const  draftColorPrice = await I.grabTextFrom (this.colorOption);
    const  draftSizePrice = await I.grabTextFrom (this.sizeOption);
   
    let result = draftColorPrice.replace(/White \(\+\$(\d+\.\d+)\)/g, "$1")+(+draftProductPrice.replace(/Medium\(\+\$(\d+\.\d+)\)/g, "$1"))+ (+draftProductPriceslice(1));
    console.log(result);
    
},

selectSize() {
    I.click (this.sizeDropDown),
    I.click (this.sizeOption)
 },
}