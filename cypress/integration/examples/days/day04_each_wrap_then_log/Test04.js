describe('Test suit 4', () => {
    it('First TC', () => {
        cy.visit("https://automationexercise.com/");
       
        //parent child chaining
        cy.get('.features_items').find('.col-sm-4').should('have.length',34);
        cy.wait(2000);
         
        cy.get('.features_items .col-sm-4 .productinfo.text-center').each(($el,index,$list)=>{

            const textOfElement=$el.find('p').text();
            if(textOfElement.includes('Stylish')){
                cy.wrap($el).find('a').click();
            
            }
            
            
              });
        
    });


});

    