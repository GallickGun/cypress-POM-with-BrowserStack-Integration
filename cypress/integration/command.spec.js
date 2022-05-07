describe('Command Example', function(){

    const username = Cypress.env('sauceUser');
    const password = Cypress.env('saucePassword');
    const baseUrl = Cypress.config('baseUrl');
    const wrongUsername = Cypress.env('sauceErrorUser');
    const wrongPassword = Cypress.env('sauceErrorPassword');

    beforeEach(function(){
        cy.visit('/');
    });

    it('Success login test', function(){
        cy.inputCredentials(username, password);
        cy.log('I am logged in')
        cy.get('.title').should('contain.text', 'Products');
        cy.logout();
    });

    it('throw error when password does not match',  function(){
        cy.inputWrongCredentials(wrongUsername, wrongPassword)
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    afterEach(function(){
        cy.url().should('eq', baseUrl)
    })
})