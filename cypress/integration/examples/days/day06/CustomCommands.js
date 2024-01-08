///<reference types="Cypress" />

describe('CusttomCommands', () => {
    it.skip('Poztif Login Testi 1', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.btn-sign-in-simple').click();
        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b{enter}')
        
    });
    it.skip('Komutlu login test', () => {
         cy.QualityDemyLogin('mb@babayigit.net','M123456.b{enter}')
        
    });

    it('Komutla Negatif login testi', () => {
        cy.QualityDemyLogin('murat@babyigit.net','M123456b{enter}')
        
    });
    
});