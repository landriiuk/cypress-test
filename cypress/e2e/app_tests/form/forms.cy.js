/// <reference types="cypress" />
// import 'cypress-xpath';
describe('Forms tests', () => {
    it('Verify prev()', () => {
        cy.visit('/pages/forms/layouts');
        // cy.get(".inner-circle").eq(0).prevAll();
        cy.get('span:contains("Option 1")').should("be.visible").prevUntil('.outer-circle',);
        cy.xpath('//a[@class="logo"]').click();
    });

    it("Check real events", () => {
        cy.visit('/pages/forms/layouts');
        cy.get('span:contains("Option 1")').realClick({ pointer: 'mouse' });
        cy.get('[data-cy="imputEmail1"]').focus().realType('test@user.com');

        cy.wait(3000);
        // cy.visit('/pages/modal-overlays/tooltip');
        // cy.contains("Show Tooltip").eq(0).realHover();
    });

    const localization = ["Ukr", "Eng" ]
    for (let index = 0; index < localization.length; index++) {
        it(`Verify base form within ${localization[index]}`, () => {
            cy.visit('/pages/forms/layouts');
            cy.get(".col-md-6:eq(1)").contains("Basic form").parent().within(() => {
                cy.get('[placeholder="Email"]').clear().type("new email")
                cy.get('[type="password"]').clear().type("new psss")
                cy.get(".custom-checkbox").click();
                cy.get('[type="submit"]').click();

                cy.wait(5000);
                cy.scrollTo("top", { ensureScrollable: false });
            });
        });
    }
});