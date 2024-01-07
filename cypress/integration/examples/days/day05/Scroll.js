///<reference types="Cypress" />
describe('Scroll işlemleri', () => {
    it('Sayfayı belirli bir yere kaydırma', () => {
        cy.visit('https://tripandway.com/');
       // cy.get('.wpcc-btn').click();
        cy.get('.portfolio-page > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView

        cy.wait(5000)
        cy.get('.testimonial-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView
        
    });

    it('İstediğin yere kaydırma', () => {
        cy.visit('https://tripandway.com/');
        cy.get('.col > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(5000);
        cy.scrollTo(0,1)

        cy.get('.brand-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        cy.scrollTo(0,500)  // asağı inmek için
        cy.wait(5000);
        cy.scrollTo(0,-500)  // yukarı çıkmak için
        
    });

    it('koordinatla gitme', () => {
        cy.visit('https://tripandway.com/');
        cy.get('.brand-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({top:500 , left:0})

        
    });
    
});