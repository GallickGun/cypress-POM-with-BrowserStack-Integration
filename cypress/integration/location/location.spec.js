describe('location demo', ()=>{

    //without POM
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
    });

    it('should have Swag Labs title', ()=>{
        cy.title().should('eq', 'Swag Labs');
    });

    it('URL should be https://www.saucedemo.com/', ()=>{
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('protocol is HTTPS', ()=>{
        cy.location('protocol').should('contains', 'https');
    });

    it('hostname is www.saucedemo.com', ()=>{
        cy.location('hostname').should('eq', 'www.saucedemo.com');
    });

    it('should redirect logged in user to /inventory.html', ()=>{
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');
        cy.get('[data-test=login-button]').click();

        cy.location('pathname').should('eq', '/inventory.html');
    });
});