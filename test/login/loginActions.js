const loginObjects = require("./loginObjects");

class LoginActions {
    async setUserName(userName){
        await loginObjects.loginUserName.setValue(userName);
    }

    async setUserPassword(userPssword){
        await loginObjects.loginUserPassword.setValue(userPssword);
    }

    async clickSubmitButton(){
        await loginObjects.submitbutton.click();
    }

}

module.exports = new LoginActions();