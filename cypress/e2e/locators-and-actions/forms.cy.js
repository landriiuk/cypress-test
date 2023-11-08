/// <reference types="cypress" />


describe('Modal & Overlays, Dialog', () => {
    it('Return Result From Dialog', () => {
        cy.visit('forms/layouts');
        cy.get('#inputEmail3').clear().type('test.email@gmail.com');
        cy.get('#inputPassword3').clear().type('test.email@gmail.com');
        cy.get('.checkbox .label .custom-checkbox').click();
        cy.get('button:contains("Sign in")').eq(1).click();
    })
})