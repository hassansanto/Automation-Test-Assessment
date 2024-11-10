const addToCartLocators = require("./addToCartLocators")

class AddToCartActions{
    async clickOnhamburgerMenu(){
        await addToCartLocators.hamburgerMenu.click();
        await browser.pause(1000);
    }

    async clickOnResetAppState(){
        await addToCartLocators.resetAppState.click();
        await browser.pause(1000);
    }

    async clickOnCrossButton(){
        await addToCartLocators.crossButton.click();
        await browser.pause(1000);
    }

    async filterByLetter(order){
        await addToCartLocators.dropdownFilter.selectByVisibleText(order);
    }

    async clickOnFirstProductAddButton(){
        await addToCartLocators.firstProductAddButton.click();
        await browser.pause(1000);
    }

    async clickOnSecondProductAddButton(){
        await addToCartLocators.secondProductAddButton.click();
        await browser.pause(1000);
    }

    async clickOnThirdProductAddButton(){
        await addToCartLocators.thirdProductAddButton.click();
        await browser.pause(1000);
    }

    async clickOnFirstItemAddButton(){
        await addToCartLocators.firstItemAddButton.click();
    }

    async clickOnCartIcon(){
        await addToCartLocators.cartIcon.click();
        await browser.pause(1000);
    }


}


module.exports = new AddToCartActions();