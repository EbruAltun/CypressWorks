describe('get vs find test', () => {

    it('get vs find', () => {

        cy.visit("https://automationexercise.com/");
       
        //parent child chaining
        cy.get('.features_items').find('.col-sm-4').should('have.length',34);
       // cy.get('.features_items .col-sm-4').should('have.length',34);

       // index is starting 0 
       cy.get('.features_items').find('.col-sm-4').eq(1).contains('Add to cart').click();

      
       
        
    });
    
});