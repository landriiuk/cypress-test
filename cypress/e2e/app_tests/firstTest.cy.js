/// <reference types="cypress" />
describe('First test suite', () => {

    context('First test suite - context', () => {
        it('First test', () => {
            cy.visit('');
            // cy.url().should('contain', 'endpoint');
        });
    });

    describe('Second describe inside', () => {
        it('Verify button text', { viewportHeight: 5000 }, () => {
            cy.viewport("ipad-mini")
            cy.visit('layout/accordion');
            cy.url().should('contain', 'layout/accordion');
            cy.get(".appearance-filled").should("contain.text", "Toggle First Item")
            cy.get('nb-card-header').should("contain.text", "Toggle Accordion By Button")
            cy.get('.appearance-filled').click();
        });

        it('Verify button text should fail', {
            retries: {
                runMode: 3,
                openMode: 2,
            }
        }, () => {
            cy.visit('layout/accordion');
            cy.url().should('contain', 'layout/accordion');
            cy.get(".appearance-filled").should("contain.text", "Toggle First Itemtfhf")
        });

    });

});