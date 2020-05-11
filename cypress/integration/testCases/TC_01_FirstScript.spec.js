describe('Login',function(){

    it('Login Test',function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=v34qcu')
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
    })
})