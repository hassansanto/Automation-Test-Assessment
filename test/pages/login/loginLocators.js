class LogIn{
    
    get loginUserNameInput(){
        return $("//input[@placeholder ='Username']");
    }

    get loginPasswordInput(){
        return $("//input[@placeholder ='Password']");
    }

    get buttonSignIn(){
        return $("//input[@id ='login-button']");
    }

    get errorText(){
        return $("//div[@class='error-message-container error']");
    }
}

module.exports = new LogIn();