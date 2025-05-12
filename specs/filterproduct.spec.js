const loginActions = require("../test/login/loginActions");
const resetAppState = require("../test/reset_app_state/rasActions");
const filterActions = require("../test/filterProductPurchase/flterActions");

const userName = "standard_user";
const userPssword = "secret_sauce";

const firstName ='ferdous';
const lastName ='hassan';
const postalCode ='5600';

const actualProductOneName = 'Sauce Labs Bolt T-Shirt';
const actualProducttwoName = 'Sauce Labs Onesie';
const actualProductThreeName = 'Sauce Labs Fleece Jacket';
const totalPrice = 'Total: $79.89';


describe("SauceDemo website automation test suite", ()=>{
    it("Varify the Filter product purchase for Standard User", async()=>{
        //For Url Navigation
        await browser.url("https://www.saucedemo.com/");
        //For Login
        await loginActions.setUserName(userName);
        await loginActions.setUserPassword(userPssword);
        await loginActions.clickSubmitButton();
        //For Reset App
        await resetAppState.resetAppState();

        //For select Product and purchase
        await filterActions.selectFilterProduct();
        await filterActions.filterUserdata(firstName,lastName,postalCode);
        await filterActions.filterCompliteCheckout(actualProductOneName,actualProducttwoName,actualProductThreeName,totalPrice);
    

        // //For Reset App
        await resetAppState.resetAppState();



        await browser.pause(5000);
    })
})