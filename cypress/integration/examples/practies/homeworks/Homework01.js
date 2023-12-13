/*
1- navigate the "https://practice.expandtesting.com/"
2- click Login Form
3- type username "practice"
4- type password "SuperSecretPassword!"
5- click login button
6- verify message displayed "You logged into a secure area!"
*/
describe('Practice ziyaret ', () => {
    it('navigate', () => {
        cy.visit("https://practice.expandtesting.com/")
        cy.get("a[href='/login']").click()
        cy.get("#username").type("practice")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get("button[type='submit']").click()
        cy.get("#flash").should('contain' ,"You logged into a secure area!")

    });
    
});