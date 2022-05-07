import homepage from "../../pages/saucelabs/homepage";
import inventoryPage from "../../pages/saucelabs/inventoryPage";

const username = Cypress.env('sauceUser');
const password = Cypress.env('saucePassword');
const baseUrl = Cypress.config('baseUrl');
const wrongUsername = Cypress.env('sauceErrorUser');
const wrongPassword = Cypress.env('sauceErrorPassword');

describe('POM implementation', () => {
    
    beforeEach(() => {
        homepage.visit();
    });

    it('Should login successfully', () => {
        homepage.inputCredentials(username, password);
        homepage.clickLoginButton();
        inventoryPage.isLoggedInSuccessfully();
        inventoryPage.userLogout();
    });

    it('Should throw error message if credentials are invalid', ()=>{
        homepage.inputCredentials(wrongUsername, wrongPassword);
        homepage.clickLoginButton();
        homepage.errorLoginMessage();
    })

    afterEach(() => {
        cy.log('Execution is finished');
    });
});