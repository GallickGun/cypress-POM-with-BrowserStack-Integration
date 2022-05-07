describe('fixture demo', ()=>{
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('sauceUsers')
        .then(function(data){
            this.data = data;
        })

    });

    it('Login as standard user', function(){    
        cy.get('[data-test="username"]').type(this.data.username);
        cy.get('[data-test="password"]').type(this.data.password);
        cy.get('[data-test=login-button]').click();
        cy.get('.title').should('contain.text', 'Products');
    });

    it('throw error when password does not match',  function(){
        cy.get('[data-test="username"]').type(this.data.username);
        cy.get('[data-test="password"]').type(this.data.incorrectPassword);
        cy.get('[data-test=login-button]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })
});