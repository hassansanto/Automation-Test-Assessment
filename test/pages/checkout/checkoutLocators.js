class CheckoutLocators{

    get nameOfItems(){
        return $("//div[@class='inventory_item_name']");
    }

    
    get itemTotal(){
        return $("//div[@class='summary_subtotal_label']")
    }

    get taxTotal(){
        return $("//div[@data-test='tax-label']");
    }

    get totalValue(){
        return $("//div[@data-test='total-label']");
    }

    get finishButton(){
        return $("//button[@id='finish']");
    }

    get completeMessage(){
        return $("//div[@id='checkout_complete_container']");
    }

    get logOutButton(){
        return $("//a[@id='logout_sidebar_link']");
    }
}

module.exports = new CheckoutLocators();