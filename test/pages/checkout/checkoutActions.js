const checkoutLocators = require("./checkoutLocators");
const utility = require("../../Utilities/utility");

class CheckoutAction{
    async getAllItemName(){
        return await checkoutLocators.nameOfItems.getText();
    }
    
    async getItemTotalAmount(){
        const itemTotal = await checkoutLocators.itemTotal.getText();
        const itemTotalInNumber = await utility.convertTextToNumber(itemTotal);
        return itemTotalInNumber;
    }

    async getTaxTotalAmount(){
        const taxTotal = await checkoutLocators.taxTotal.getText();
        const taxTotalInNumber = await utility.convertTextToNumber(taxTotal);
        return taxTotalInNumber;
    }

    async getTotalValue(){
        const totalValue = await checkoutLocators.totalValue.getText();
        const totalValueInNumber = await utility.convertTextToNumber(totalValue);
        return totalValueInNumber;
    }

    async clickOnFinishButton(){
        await checkoutLocators.finishButton.click();
        await browser.pause(2000);
    }

    async getCompleteMessage(){
        return await checkoutLocators.completeMessage.isDisplayed();
        await browser.pause(2000);
    }

    async clickOnLogOutButton(){
        await checkoutLocators.logOutButton.click();
    }


}

module.exports = new CheckoutAction();