describe('Sign In Form', () => {
  it('should fill out the form and submit', () => {
    cy.visit('/pages/forms/layouts');

    // Clear the auto-filled text
    cy.get('#email-input').clear();
    cy.get('#password-input').clear();

    // Enter email and password
    cy.get('#email-input').type('example@example.com');
    cy.get('#password-input').type('password123');

    // Check the checkbox
    cy.get('#remember-checkbox').check();

    // Submit the form
    cy.get('#sign-in-button').click();
  });
});
