describe('Modal Dialog', () => {
  it('should open modal dialog and check its content', () => {
    cy.visit('/pages/modal-overlays/dialog');

    // Click the button to open the modal
    cy.get('#open-dialog-button').click();

    // Check if the modal is displayed
    cy.get('.modal-dialog').should('be.visible');

    // Check modal title, input, and buttons
    cy.get('.modal-title').should('have.text', 'Dialog Title');
    cy.get('.modal-input').should('exist');
    cy.get('.modal-submit-button').should('have.text', 'Submit');
    cy.get('.modal-cancel-button').should('have.text', 'Cancel');
  });
});
