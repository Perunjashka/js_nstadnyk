const { I } = inject();

module.exports = {

   async getTotalPrice() {
      const totalPrice = parseFloat(totalPrice.replace(/[^0-9\.]/g, ""));
   },

   async getTaxPrice() {
      const taxPrice = parseFloat(taxPrice.replace(/[^0-9\.]/g, ""));
   },

   async getflatShippingRatePrice() {
      const flatShippingRatePrice = parseFloat(flatShippingRatePrice.replace(/[^0-9\.]/g, ""));
   },

   async getvatPrice() {
      const vatPrice = parseFloat(vatPrice.replace(/[^0-9\.]/g, ""));
   },

   verifySuccessfulPurchase() {
      I.seeTextEquals({ xpath: '//div[@id="content"]/h1' }, "Your order has been placed!");
   },

}
