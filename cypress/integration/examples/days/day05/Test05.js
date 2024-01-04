describe('go komutu', () => {

    it('', () => {
        cy.visit('https://www.google.com') 
        cy.get('#APjFqb').type('avrupa yakası{enter}');
        cy.go('back')  // cy.go(-1)
        cy.go('forward');  //cy.go(1)
        cy.reload();
        cy.wait(3000);
    });
  
    
});