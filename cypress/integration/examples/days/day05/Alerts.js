///<reference types="Cypress" />

describe('Alerts Click ', () => {
    it('', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get(':nth-child(1) > button').click() //cypress default olarak tamam ı tıklar
        cy.get('#result').should('have.text','You successfully clicked an alert')
    });   

    it('Dismis', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 
        cy.wait(3000)

        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('have.text','You clicked: Cancel')

        cy.on('window:confirm',()=> {  // on() fonksiyonu JQuery fonksiyonudur Beowser da pencerelerin kontrolünü sağlar 
            return false
        })
       
    });

    it.only('Prompt Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 
        cy.wait(3000)
        cy.get(':nth-child(3) > button').click()
        cy.window().then(($windowsElement) => {
            cy.stub('$windowsElement','prompt').returns('Wise')
            cy.screenshot()
        })
    });
});