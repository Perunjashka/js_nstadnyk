const { I } = inject();

module.exports = {
   taxPrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[3]/td[2]' },
   flatShippingRatePrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[2]/td[2]' },
   vatPrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[4]/td[2]' },
   totalPrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[5]/td[2]' },


   async getTotalPrice() {
      let totalPrice = await I.grabTextFrom(this.totalPrice);
      return totalPrice = parseFloat(totalPrice.replace(/[^0-9\.]/g, ""));

   },

   async getTaxPrice() {
      let taxPrice = await I.grabTextFrom(this.taxPrice);
      return taxPrice = parseFloat(taxPrice.replace(/[^0-9\.]/g, ""));

   },

   async getflatShippingRatePrice() {
      let flatShippingRatePrice = await I.grabTextFrom(this.flatShippingRatePrice);
      return flatShippingRatePrice = parseFloat(flatShippingRatePrice.replace(/[^0-9\.]/g, ""));

   },

   async getVatPrice() {
      let vatPrice = await I.grabTextFrom(this.vatPrice);
      return vatPrice = parseFloat(vatPrice.replace(/[^0-9\.]/g, ""));

   },
   
   }

   

   


