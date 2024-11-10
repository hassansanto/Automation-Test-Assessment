class CartLocators{

    get allProductName(){
        return $("//div[@data-test='inventory-item-name']");
    }
    
    get checkoutButton(){
        return $("//button[@id='checkout']");
    }

    get firstNamePlaceholder(){
        return $("//input[@id='first-name']");
    }

    get lastNamePlaceholder(){
        return $("//input[@id='last-name']");
    }

    get zipCodePlaceholder(){
        return $("//input[@id='postal-code']");
    }

    get continueButton(){
        return $("//input[@id='continue']");
    }

    // get priceFromCartPage(){
    //     return $("//div[@class='inventory_item_price']");
    // }

}

module.exports = new CartLocators();