const USERNAME_INPUT = '[data-test=username]';
const PASSWORD_INPUT = '[data-test=password]';
const LOGIN_BUTTON = '[data-test=login-button]';
const ERROR_LOGIN_MESSAGE = '[data-test=error]';
class SauceLabsHomePage{
    
    visit(){
       cy.visit('/'); 
       cy.title().should('eq', 'Swag Labs');
    }

    inputUsername(){
     return cy.get(USERNAME_INPUT);
    }

    inputPassword(){
        return cy.get(PASSWORD_INPUT);
    }
    
    loginButton(){
        return cy.get(LOGIN_BUTTON);
    }
    
    errorLoginMessage(){
        return cy.get(ERROR_LOGIN_MESSAGE);
    }

    inputCredentials(username, password){
        this.inputUsername().type(username);
        this.inputPassword().type(password);
        this.inputUsername().should('have.value', username);
        this.inputPassword().should('have.value', password);
    }

    clickLoginButton(){
        this.loginButton().click();
    }
}

const homepage = new SauceLabsHomePage();
export default homepage;