const purchaseObjects = require('./purchaseObjects');


class PurchaseActions{

    async selectProduct(){
        await purchaseObjects.productOne.click();
        await purchaseObjects.productTwo.click();
        await purchaseObjects.productThree.click();
    }

    async userData(firstName,lastName,postalCode){

        await purchaseObjects.cartBtn.click();

        await purchaseObjects.checkoutBtn.click();

        await purchaseObjects.firstName.setValue(firstName);
        await purchaseObjects.lastName.setValue(lastName);
        await purchaseObjects.postalCode.setValue(postalCode);
        
        await purchaseObjects.purchaseContinue.click();
    }



    async CompliteCheckout(actualProductOneName,actualProducttwoName,actualProductThreeName,totalPrice){

        const expectProductOneName = await $('//div[contains(text(),"Sauce Labs Bolt T-Shirt")]');
        const expectProductTwoName = await $('//div[contains(text(),"Sauce Labs Bike Light")]');
        const expectProductThreeName = await $('//div[contains(text(),"Sauce Labs Backpack")]');
        const expectProductTotalPrice = await $('.summary_total_label');  // alternative xpath: //div[@class="summary_total_label"]

        
        await expect(expectProductOneName).toBeDisplayed();
        await expect(expectProductTwoName).toBeDisplayed();
        await expect(expectProductThreeName).toBeDisplayed();
        await expect(expectProductTotalPrice).toBeDisplayed();


        await expect(expectProductOneName).toHaveText(actualProductOneName);
        await expect(expectProductTwoName).toHaveText(actualProducttwoName);
        await expect(expectProductThreeName).toHaveText(actualProductThreeName);
        await expect(expectProductTotalPrice).toHaveText(totalPrice);


        await purchaseObjects.finishBtn.click();
    }

}

module.exports = new PurchaseActions();