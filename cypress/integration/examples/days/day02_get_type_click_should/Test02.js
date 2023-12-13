describe("My First Test Suite",()=>{

    it("Test Case 1",()=>{
  //navigate the website
  cy.visit("https://automationexercise.com/products");
  //get method for locating element
  const searchElement=cy.get('#search_product');
  
  //type method for texting into input 
  searchElement.type('Polo');
  //cy.get('#search_product').type('Polo');
  //click method for clicking element 
  cy.get('#submit_search').click();
  //sleep
  cy.wait(2000);
  
  cy.get('.single-products img').should('have.length',1);
  
  //get only visible elements
  //cy.get('.single-products img:visible').should('have.length',1);
  
    })
  
  })
  