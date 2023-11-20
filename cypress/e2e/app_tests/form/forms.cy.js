/// <reference types="cypress" />
import { clickOnLogo } from '../../../models/baseModel';
import { clickOnOption, realTypeIntoEmailField, typeSensitiveIntoEmailField, verifyIfOptionIsVisible } from '../../../models/formPage';
import { elems } from '../../../models/tableModel';

describe('Forms tests', () => {
    beforeEach(() => {
        cy.visit('/pages/forms/layouts');
    });

    it.only('Verify prev()', () => {
        verifyIfOptionIsVisible("Option 1");
        clickOnLogo();
    });

    it.only("Check real events", () => {
        clickOnOption("Option 1");
        realTypeIntoEmailField();
        typeSensitiveIntoEmailField();
        // cy.contains("Show Tooltip").eq(0).realHover();
    });

    const localization = ["Ukr"] // ["Ukr", "Eng"]
    for (let index = 0; index < localization.length; index++) {
        it(`Verify base form within ${localization[index]}`, () => {
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