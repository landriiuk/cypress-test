Cypress.Commands.add('getAppearanceAndVerifyText', (text) => {
    cy.get(".appearance-filled").should("contain.text", text);
});

Cypress.Commands.add('login', (email, password) => {
    cy.get(".col-md-6:eq(1)").contains("Basic form").parent().within(() => {
        cy.get('[placeholder="Email"]').clear().type(email);
        cy.get('[type="password"]').clear().type(password);
        cy.get(".custom-checkbox").click();
        cy.get('[type="submit"]').click();
    });
});

Cypress.Commands.add('getBySell', (selector) => {
    cy.get(`[data-cy="${selector}"]`).should("be.visible");
});

Cypress.Commands.add('getPlaceholderByName', (selector) => {
    cy.get(`[placeholder="${selector}"]`).should("be.visible");
});

Cypress.Commands.add('typeEnter', { prevSubject: "element" }, (subject, text) => {
    cy.wrap(subject).type(`${text}{enter}`);
});

Cypress.Commands.add('forceClick', { prevSubject: "element" }, (subject) => {
    cy.wrap(subject).click({ force: true });
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })


declare namespace Cypress {
    interface Chainable {
        getAppearanceAndVerifyText(test: string): Chainable<void>
        login(email: string, password: string): Chainable<void>
        getBySell(selector: string): Chainable<void>
        getPlaceholderByName(selector: string): Chainable<void>
        typeEnter(subject: Element, text: string): Chainable<JQuery<HTMLElement>>
    }
}



