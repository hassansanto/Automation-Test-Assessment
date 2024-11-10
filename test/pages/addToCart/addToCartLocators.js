class AddToCartLocators{
    
    get hamburgerMenu(){
        return $ ("//button[@id='react-burger-menu-btn']")
    }

    get resetAppState(){
        return $("//a[@id='reset_sidebar_link']")
    }

    get crossButton(){
        return $("//button[@id='react-burger-cross-btn']")
    }

    get dropdownFilter(){
        return $("//select[@class='product_sort_container']");
    }

    get firstProductAddButton(){
        return $("//button[@name = 'add-to-cart-sauce-labs-backpack']")
    }

    get secondProductAddButton(){
        return $("//button[@name = 'add-to-cart-sauce-labs-bike-light']")
    }

    get thirdProductAddButton(){
        return $("//button[@name = 'add-to-cart-sauce-labs-bolt-t-shirt']")
    }

    get firstItemAddButton(){
        return $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
    }

    get cartIcon(){
        return $("//a[@data-test='shopping-cart-link']")
    }
}

module.exports = new AddToCartLocators();