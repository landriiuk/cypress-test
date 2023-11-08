/// <reference types="cypress" />


describe('Modal & Overlays, Dialog', () => {
    it('Return Result From Dialog', () => {
        cy.visit('modal-overlays/dialog');
        cy.get('button:contains("Enter Name")').click();
        cy.get('ngx-dialog-name-prompt');
        cy.get('ngx-dialog-name-prompt nb-card-header').should('contain.text','Enter your name');
        cy.get('[placeholder="Name"]')
        cy.get('button:contains("Submit")');
        cy.get('button:contains("Cancel")');
    })
})