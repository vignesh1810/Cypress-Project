describe('Registration page',function(){

    it('Handling Check box button',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should('eq','Register')
        cy.get('#checkbox1').should('not.be.checked')
        cy.get('#checkbox2').should('not.be.checked')
        cy.get('#checkbox3').should('not.be.checked')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        //To select multiple checkbox in one shot
        cy.get('input[type="checkbox"]').check(['Cricket','Hockey'])
    

    })
})