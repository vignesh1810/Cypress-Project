describe('Registration page',function(){

    it('Handling Radio button',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should('eq','Register')
        
        //Input boxes
        cy.get('input[ng-model="FirstName"]').type('Vignesh')
        cy.get('input[ng-model="LastName"]').type('S')

        //Radio button
        cy.get('input[value="Male"]').should('not.be.checked').click()
        cy.get('input[value="FeMale"]').should('not.be.checked').click()
        cy.get('input[value="Male"]').should('not.be.checked').click()
    })
})