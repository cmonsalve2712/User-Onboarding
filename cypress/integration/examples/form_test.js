describe('Testing Form Inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('Lets test some inputs...', () => {
        cy.get('[data-cy=name]')
        .type('Deisy Monsalve')
        .should('have.value', 'Deisy Monsalve');
        cy.get('[data-cy=email')
        .type('mail@dmonsalve.com')
        .should('have.value', 'mail@dmonsalve.com')
        cy.get('[data-cy=password]')
        .type('supersecretpassword')
        .should('have.value', 'supersecretpassword')
        cy.get('[data-cy=checkbox]')
        .check()
        .should('be.checked')
        cy.get('[data-cy=submit]')
        .click()
    })
})

describe('Testing Form Validation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('Lets test a validation error on missing checkbox', () => {
        cy.get('[data-cy=name]').type('Deisy Monsalve')
        cy.get('[data-cy=email]').type('mail@dmonsalve.com')
        cy.get('[data-cy=password]').type('supersecretpassword')

        cy.get('[data-cy=checkbox]').check()
        cy.get('[data-cy=checkbox]').uncheck()


        cy.get('[data-cy=warning]').should('have.text', 'Must accept terms!')
    })
});