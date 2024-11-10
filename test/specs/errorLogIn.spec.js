const loginActions = require("../pages/login/loginActions");


describe("Swag lab login journey", () => {
    it("Should give error for the wrong log in", async()=>{
        await loginActions.enterUserName('locked_out_user');
        await loginActions.enterPassword('secret_sauce');
        await loginActions.clickOnLogInButton();

        const errorMessage = await loginActions.getErrortext();
        expect(errorMessage).toBe(true);
        await browser.pause(5000);


    });


});