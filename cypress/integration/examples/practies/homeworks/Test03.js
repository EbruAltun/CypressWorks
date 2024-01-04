
/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
*/

describe(' Test 08', () => {
    it('Verify All Products and product detail page', () => {
        cy.visit('http://automationexercise.com');
        cy.get('.logo.pull-left').should('exist');
         //  cy.get('.logo.pull-left').should('be.visible');
         cy.get(".material-icons.card_travel").click();
         cy.get('.title.text-center').should('be.visible');

            /* cy.get('.features_items .col-sm-4 .productinfo.text-center').each(($el,index,$list)=>{

            const textOfElement=$el.find('p').text();
            if(textOfElement.includes('Stylish')){
                cy.wrap($el).find('a').click();
            
            }
            
            
              });

               */
              cy.get('.features_items').find('.col-sm-4').should('have.length',34);
              cy.get('.features_items').find('.col-sm-4').eq(0).contains('Add to cart').click();

    });
    
});