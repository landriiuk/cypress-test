/// <reference types="cypress" />
describe('Forms tests', () => {
    beforeEach(() => {
        cy.visit('/pages/forms/layouts');
        // if (Env === "stage") {
        //     cy.login("email", "pass")
        // } else {
        //     cy.login("email_stage", "pass")
        // }
    })

    it('Verify prev()', () => {
        // cy.visit('/pages/forms/layouts');
        // cy.get(".inner-circle").eq(0).prevAll();
        cy.get('span:contains("Option 1")').should("be.visible").prevUntil('.outer-circle',);
        cy.xpath('//a[@class="logo"]').click();
    });

    it.only("Check real events", () => {
        // cy.visit('/pages/forms/layouts');
        cy.get('span:contains("Option 1")').realClick({ pointer: 'mouse' });
        cy.get('[data-cy="imputEmail1"]').typeEnter('test@user.com');
        cy.get('[data-cy="imputEmail1"]').type('test@user.com', { sensitive: true });
        // cy.get('[data-cy="imputEmail1"]').focus().realType('test@user.com');
        cy.wait(3000);
        // cy.visit('/pages/modal-overlays/tooltip');
        // cy.contains("Show Tooltip").eq(0).realHover();
    });

    const localization = ["Ukr"] // ["Ukr", "Eng"]
    for (let index = 0; index < localization.length; index++) {
        it(`Verify base form within ${localization[index]}`, () => {
            // cy.get(".col-md-6:eq(1)").contains("Basic form").parent().within(() => {
            //     cy.get('[placeholder="Email"]').clear().type("new email")
            //     cy.get('[type="password"]').clear().type("new psss")
            //     cy.get(".custom-checkbox").click();
            //     cy.get('[type="submit"]').click();

            //     cy.wait(5000);
            //     cy.scrollTo("top", { ensureScrollable: false });
            // });
            cy.getBySell("submit_for_inline_form");
            cy.login("my email", "my pass");
        });
    }

    it('invoke', () => {
        // cy.get(".logo").invoke("text").should((text) => {
        //     // text.text() -> dont use it here.
        //     cy.log(text);
        // });

        cy.get(".logo").invoke("text").should("contain", "ngx-admin");
        cy.get('[data-cy="submit for inline form"]').invoke("removeAttr", "type", "submit").should("not.have.attr", "type");
        // cy.get("button.shape-rectangle").eq(1).should("be.hidden").invoke("show").should("not.be.hidden")
        cy.get('[icon="chevron-down-outline"]').should("be.hidden").invoke("show");
        cy.get('[data-cy="submit for inline form"]').invoke("css", "").should("eq", "rgb ...");
        cy.get("").invoke("toArray").should("eq", "");
    });
});