const loginActions = require("../test/login/loginActions");

const userName = "locked_out_user";
const userPssword = "secret_sauce";
const actualErrorMgs = "Epic sadface: Sorry, this user has been locked out.";


describe("SauceDemo website automation test suite", ()=>{
    it("Varify the Lock User error message", async()=>{
        await loginActions.setUserName(userName);
        await loginActions.setUserPassword(userPssword);
        await loginActions.clickSubmitButton();

        const expectedErrorMgs = await $('//h3[@data-test="error"]');
        await expect(expectedErrorMgs).toBeDisplayed()
        await expect(expectedErrorMgs).toHaveText(actualErrorMgs);
        await browser.pause(5000);
    })
})