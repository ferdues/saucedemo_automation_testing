class LoginObjects{

    get loginUserName(){
        return $('#user-name');
    }

    get loginUserPassword(){
        return $('#password');
    }
    
    get submitbutton(){
        return $('#login-button')
    }

 
}

module.exports = new LoginObjects();