//Hooks are from Mocha
// helps you to set conditions before and/or after test

describe('Hook demo', function(){
    
    before(function(){
        cy.log('Before hook');
    });

    beforeEach(function(){
        cy.log('Before Each hook');
    })
    it('TC #1', function(){
        console.log('Executing TC #1');
    });
    it('TC #2', function(){
        console.log('Executing TC #2');
    });
    it('TC #3', function(){
        console.log('Executing TC #3');
    });

    after(function(){
        cy.log('After Hook');
    });

    afterEach(function(){
        cy.log('After Each Hook');
    });
});