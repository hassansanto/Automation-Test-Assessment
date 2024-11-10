const cartLocators = require ("./cartLocators");
const utility = require("../../Utilities/utility");


class CartActions{
    async getItemName(){
        return await cartLocators.allProductName.getText();
    }
    
    async clickOnCheckoutButton(){
        await cartLocators.checkoutButton.click();
    }

    async inputFirstName(firstname){
        await cartLocators.firstNamePlaceholder.setValue(firstname);
        await browser.pause(1000);
    }

    async inputLastName(lastname){
        await cartLocators.lastNamePlaceholder.setValue(lastname);
        await browser.pause(1000);
    }

    async inputZip(number){
        await cartLocators.zipCodePlaceholder.setValue(number);
        await browser.pause(200);
    }

    async clickOnContinueButton(){
        await cartLocators.continueButton.click();
        await browser.pause(2000);
    }

    // async getAllProductPrice(){
    //     const allProductPrice = await cartLocators.priceFromCartPage.getText();
    //     const productPriceInNumber = await utility.convertTextToNumber(allProductPrice);
    //     return productPriceInNumber;
    // }
}

module.exports = new CartActions();