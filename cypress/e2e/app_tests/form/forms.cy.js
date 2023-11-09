/// <reference types="cypress" />
// import 'cypress-xpath';
describe('Forms tests', () => {
    it('Verify prev()', () => {
        cy.visit('/pages/forms/layouts');
        // cy.get(".inner-circle").eq(0).prevAll();
        cy.get('span:contains("Option 1")').should("be.visible").prevUntil('.outer-circle',);
        cy.xpath('//a[@class="logo"]').click();
    });

    it.only("Check real events", () => {
        cy.visit('/pages/forms/layouts');
        cy.get('span:contains("Option 1")').realClick({ pointer: 'mouse' });
        cy.get('[data-cy="imputEmail1"]').focus().realType('test@user.com');

        cy.wait(3000);
        // cy.visit('/pages/modal-overlays/tooltip');
        // cy.contains("Show Tooltip").eq(0).realHover();
    });
});