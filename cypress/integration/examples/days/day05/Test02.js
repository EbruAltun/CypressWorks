describe('Negatif Test', () => {
    it('Test islemi', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('baba71@gmail.com');
        cy.get('[data-qa="login-password"]').type('123456{enter}');
        cy.get('[data-qa="login-button"]').click();
        cy.get('.login-form > form > p').should('include.text','incorrect');
        cy.log('Test basari ile tamamlandi');

        
    });
    
});