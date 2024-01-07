///<reference types="Cypress" />

describe('', () => {

    // terminalden iframe kurulum komutu npm npm install -D cypress-iframe

    // require('cypress-iframe) kodunu e2e.js dosyasına ekledim.

    

    it('iframe test', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        // driver.switcTo.frame(locate)
      
      
        cy.frameLoaded('#mce_0_ifr')
        cy.wait(3000)
        cy.iframe().find('p').clear()

        cy.wait(2000)
        cy.iframe().find('p').type('Have a Wise day')
        cy.get('.large-4 > div ').should('contains.text','Elemental Selenium')
        cy.log('Sayfa girisi doğrulandi')
        cy.screenshot()
    });
    
});