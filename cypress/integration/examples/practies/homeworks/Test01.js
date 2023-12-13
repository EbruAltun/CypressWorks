describe('automationexercise test', () => {
    it('login ', () => {

    cy.visit("https://automationexercise.com/");
    cy.get(".fa.fa-lock").click();
    cy.get("div.container div.row div.col-sm-4.col-sm-offset-1:nth-child(1) div.login-form form:nth-child(2) > input:nth-child(2)").type("12345ebru@gmail.com")
    cy.get('[data-qa="login-password"]').type("12345savas")
    cy.get('[data-qa="login-button"]').click();
    cy.title().should('eq','Automation Exercise')   
    });
    
});