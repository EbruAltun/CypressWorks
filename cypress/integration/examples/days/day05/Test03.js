describe('Locate alma fonksiyonu', () => {
    it('', () => {
        cy.visit('https://automationexercise.com/'); 
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        // fonksiyon işlemi ile gerçekleştirebilirim
           cy.get('.login-form > h2').then(textcontrol=>{
            expect(textcontrol.text()).to.contains('Login')
        })


        
    });
    
});