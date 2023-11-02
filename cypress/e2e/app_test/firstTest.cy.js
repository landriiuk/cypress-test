describe('First test suite', () => {
    it('Open HomePage', () => {
      cy.visit('/');
      cy.visit (`http://localhost:4200/pages/forms/layouts`)
      cy.url().should(`contain`, `layout`)
    });
  });
  