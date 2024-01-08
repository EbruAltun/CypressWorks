
///<reference types="Cypress" />

describe('Amazon Search', () => {

    it.skip('Amazon İphone Search', () => {
        cy.amazonsearch('iphone')
        
    });

    it('Amazon Search', () => {
        cy.amazonsearch('Nutella')
        
    });
    
});