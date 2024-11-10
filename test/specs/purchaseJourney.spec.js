const loginActions = require("../pages/login/loginActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const cartActions = require("../pages/cart/cartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");


describe("Swag lab purchase journey", () => {
    it("Should logn in successfully", async()=>{
        await loginActions.enterUserName('standard_user');
        await loginActions.enterPassword('secret_sauce');
        await loginActions.clickOnLogInButton();
    });

    it("Should successfully add product in the cart", async () =>{

        await addToCartActions.clickOnhamburgerMenu();
        await addToCartActions.clickOnResetAppState();
        await addToCartActions.clickOnCrossButton();

        await addToCartActions.clickOnFirstProductAddButton();
        await addToCartActions.clickOnSecondProductAddButton();
        await addToCartActions.clickOnThirdProductAddButton();
        await addToCartActions.clickOnCartIcon();
    });


    it("Should take us to the purchase page", async()=>{
        await cartActions.clickOnCheckoutButton();
        await cartActions.inputFirstName('Hasibul');
        await cartActions.inputLastName('Santo');
        await cartActions.inputZip('1236');
        await cartActions.clickOnContinueButton();
    });

    it("Should succesfully finish the purchase journey and log out", async()=>{

        const previousItemName = await cartActions.getItemName();
        const finalItemName = await checkoutActions.getAllItemName();
        expect(previousItemName).toEqual(finalItemName);

        
        const finalItemTotal = await checkoutActions.getItemTotalAmount();
        const totalTaxAmount = await checkoutActions.getTaxTotalAmount();
        const expectedTotalValue = finalItemTotal + totalTaxAmount;
        const totalPrice = await checkoutActions.getTotalValue();
        expect(expectedTotalValue).toEqual(totalPrice);

        await checkoutActions.clickOnFinishButton();

        const orderSuccesMessage = await checkoutActions.getCompleteMessage();
        expect(orderSuccesMessage).toBe(true);

        await addToCartActions.clickOnhamburgerMenu();
        await browser.pause(1000);
        await checkoutActions.clickOnLogOutButton();
        await browser.pause(1000);

    })


});