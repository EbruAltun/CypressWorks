describe('Login test', () => {
    it('Pozitif login test', () => {
        // cy.viewport(1500,2200)
        // cyviewport('macbook-16')
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.log('Login yazisitest edildi');
       cy.get('.login-form').should('be.visible');
       cy.get('.signup-form > h2').should('have.text', 'New User Signup!');
        
    });

    it('Giris islemi', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('babayigit@gmail.com');
        cy.get('[data-qa="login-password"]').type('123456{enter}');
        cy.get(':nth-child(10) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.login-form').should('be.visible');
        cy.log('Pozitif login testi tamamlandi');
        
        
    });
    
});