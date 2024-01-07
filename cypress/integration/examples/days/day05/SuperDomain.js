
///<reference types="Cypress" />
describe('SuperDomaın', () => {
    it('Aynı Clasta farklı visit', () => {
        cy.visit('https://amazon.com')
        cy.visit('https://www.amazon.com.tr/gp/bestsellers?ref_=nav_cs_bestsellers')
      //  cy.visit('https://www.google.com')
        
    });

    it('Farklı Adres', () => {
        cy.visit('https://www.google.com')
    });
    
});