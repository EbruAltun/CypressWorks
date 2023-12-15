/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible
*/

describe('Login User with incorrect email and password', () => {
    it('TC 01', () => {
        //2. Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');
      
        //3. Verify that home page is visible successfully
        cy.title().should('eq','Automation Exercise');
       
        //4. Click on 'Signup / Login' button
        cy.get('.fa.fa-lock').click();

        //  5. Verify 'Login to your account' is visible
         cy.get('.login-form').should('exist');
        // 2. yol
       // cy.get('.login-form').should('be.visible');

       //6. Enter incorrect email address and password
       cy.get('div.container div.row div.col-sm-4.col-sm-offset-1:nth-child(1) div.login-form form:nth-child(2) > input:nth-child(2)').type('aa@testcom');
       cy.get('div.container div.row div.col-sm-4.col-sm-offset-1:nth-child(1) div.login-form form:nth-child(2) > input:nth-child(3)').type('1234');
       cy.get('[data-qa="login-button"]').click();

      // 8. Verify error 'Your email or password is incorrect!' is visible
      cy.get('div.container div.row div.col-sm-4.col-sm-offset-1:nth-child(1) div.login-form form:nth-child(2) > p:nth-child(4)').should('be.visible');


      

    });
    
});