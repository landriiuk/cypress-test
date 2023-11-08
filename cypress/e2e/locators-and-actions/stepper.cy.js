/// <reference types="cypress" />


describe('Layouts, Stepper', () => {
    it('Check text', () => {
        cy.visit('layout/stepper');
        const stepContent = {
            firstStep: 'Step content #1',
            secondStep: 'Step content #2',
            thirdStep: 'Step content #3',
            fourthStep: 'Step content #4'
        }
        for (const step in stepContent) {
            cy.get('h3.ng-star-inserted').eq(0).should('have.text', stepContent[step]);
            if (step !== "fourthStep") {
                cy.get('.appearance-filled:contains("next")').eq(0).click();
            } else {
                cy.get('h3.ng-star-inserted').eq(0).should('have.text', stepContent[step]);
            }
        }
    })
})