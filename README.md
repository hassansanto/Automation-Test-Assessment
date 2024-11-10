This repository comprises automated test scripts designed for the Sauce Demo e-commerce website (https://www.saucedemo.com/) , utilizing WebdriverIO and the Page Object Model (POM) framework to ensure that the test cases are modular, maintainable, and reusable.



**Project Overview**

This project contains three main test scenarios for the Sauce Demo website:

Invalid Login: Try login with locked_out_user and verify the error message.
Product Purchase: Login with standard_user. Then from the hamburger menu Reset App State. Then Add Any three items to the cart. Then navigate up to the final checkout page and verify all the product's name and the total price. Then finish the purchase journey and verify the successful order message. Then Reset the App State again and log out.
Conditional Purchase: Login with performance_glitch_user and Reset App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the product's name and the total price. Then finish the purchase journey and verify the successful order message. Then Reset the App State again and log out.

The testing framework is designed using the Page Object Model (POM) structure, which promotes reusable and maintainable code. Each webpage is accompanied by specific action and locator files, facilitating straightforward updates to selectors or actions without affecting the core test scripts.



**Technologies Used**
Node.js: JavaScript runtime for running and managing dependencies.
WebdriverIO: Core framework for end-to-end testing.
Allure Reporter: Generates visual test reports.
Page Object Model (POM): Design pattern for modular test structure.


**Test Scenarios**
1. Invalid Login
Description: Tests logging in with invalid credentials and verifies the displayed error message.
Files: test/specs/wrongLogIn.spec.js
2. Product Purchase
Description: Adds multiple products to the cart, verifies item details on the checkout page, completes the purchase, and confirms the success message.
Files: test/specs/productPurchase.spec.js
3. Conditional Purchase
Description: Selects specific items based on conditions like sorting, verifies item and pricing details, and completes the checkout process.
Files: test/specs/conditionalPurchase.spec.js



**Prerequisites**
Make sure the device have Node.js installed in the system, as well as Java (required for generating Allure reports).
1. Node.js: Verify installation by running: node -v
2. Java: Verify Java is installed and added in the system PATH . Check by running : java -version
