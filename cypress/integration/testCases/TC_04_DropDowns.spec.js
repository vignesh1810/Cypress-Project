describe('Registration page',function(){

    it('Handling Drop downs button',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should('eq','Register')

        //Static DropDown
        cy.get('#Skills').select('Android').should('have.value','Android')

        //Dynamic Dropdown
        cy.get('span[role="combobox"]').click()
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')

        //multi select dropdown
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
    })
})