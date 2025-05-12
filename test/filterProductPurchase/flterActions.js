const filterObjects = require('./filterObjects');
const compliteCheckout = require('../purchase/purchaseActions');

class FilterActions{

    async selectFilterProduct(){
        await filterObjects.porductSort.click();
        await filterObjects.selectFilter.click();
        await filterObjects.filterProductOne.click();
        await filterObjects.filterProductTwo.click();
        await filterObjects.filterProductThree.click();
    }

    async filterUserdata(firstName,lastName,postalCode){
        await compliteCheckout.userData(firstName,lastName,postalCode);
    }

    async filterCompliteCheckout(actualProductOneName,actualProducttwoName,actualProductThreeName,totalPrice){
        const expectProductOneName = await $('//div[contains(text(),"Sauce Labs Bolt T-Shirt")]');
        const expectProductTwoName = await $('//div[contains(text(),"Sauce Labs Onesie")]');
        const expectProductThreeName = await $('//div[contains(text(),"Sauce Labs Fleece Jacket")]');
        const expectProductTotalPrice = await $('.summary_total_label');  // alternative xpath: //div[@class="summary_total_label"]

        
        await expect(expectProductOneName).toBeDisplayed()
        await expect(expectProductTwoName).toBeDisplayed()
        await expect(expectProductThreeName).toBeDisplayed()
        await expect(expectProductTotalPrice).toBeDisplayed()


        await expect(expectProductOneName).toHaveText(actualProductOneName);
        await expect(expectProductTwoName).toHaveText(actualProducttwoName);
        await expect(expectProductThreeName).toHaveText(actualProductThreeName);
        await expect(expectProductTotalPrice).toHaveText(totalPrice);


        await filterObjects.finishBtn.click();
    }
    


}
module.exports = new FilterActions();