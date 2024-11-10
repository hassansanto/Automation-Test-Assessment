const loginLocators = require("./loginLocators");

class LogInActions{
    async enterUserName(username){
        await loginLocators.loginUserNameInput.setValue(username);
        await browser.pause(200);
    }
    
    async enterPassword(password){
        await loginLocators.loginPasswordInput.setValue(password);
        await browser.pause(200);
    }

    async clickOnLogInButton(){
        await loginLocators.buttonSignIn.click();
    }

    async getErrortext(){
        return await loginLocators.errorText.isDisplayed();
    }

}

module.exports = new LogInActions();