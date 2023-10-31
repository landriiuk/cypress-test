/// <reference types="cypress" />

describe('First test suite', ()=>{
    context('First test suite-context', ()=>{


it ('Verify url', ()=>{
cy.visit('layout/stepper')
cy.url().should('contain', 'layout/stepper');
});
});
});


describe('Second describe inside', ()=>{
it('Check text of button "Hide on click"', ()=>{
cy.visit ('modal-overlays/toastr')
cy.get('span.text').should('contain', 'Hide on click');
});
});