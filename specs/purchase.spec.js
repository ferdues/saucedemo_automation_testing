const loginActions = require("../test/login/loginActions");
const resetAppState = require("../test/reset_app_state/rasActions");
const purchaseActions = require("../test/purchase/purchaseActions");

const userName = "standard_user";
const userPssword = "secret_sauce";

const firstName ='ferdous';
const lastName ='hassan';
const postalCode ='5600';

const actualProductOneName = 'Sauce Labs Bolt T-Shirt';
const actualProducttwoName = 'Sauce Labs Bike Light';
const actualProductThreeName = 'Sauce Labs Backpack';
const totalPrice = 'Total: $60.45';


describe("SauceDemo website automation test suite", ()=>{
    it("Varify the purchase for Standard User", async()=>{
        //For Login
        await loginActions.setUserName(userName);
        await loginActions.setUserPassword(userPssword);
        await loginActions.clickSubmitButton();
        //For Reset App
        await resetAppState.resetAppState();

        //For select Product
        await purchaseActions.selectProduct();

        //For Usre Data
        await purchaseActions.userData(firstName,lastName,postalCode);

        //For Purchase
        await purchaseActions.CompliteCheckout(actualProductOneName,actualProducttwoName,actualProductThreeName,totalPrice);

        //For Reset App
        await resetAppState.resetAppState();






        await browser.pause(5000);
    })
})