describe('1000bulbs Login Validation Test', () => {
    beforeEach(() => {
        // Visit the login page before each test
        cy.visit('https://www.1000bulbs.com/login');
    });

    it('Displays error when no information is entered', () => {
        // Click the sign-in button with no credentials entered
        cy.get('#login_form > :nth-child(3) > :nth-child(2) > .button').click();

        // Assert that the error message is displayed
        cy.get('#login_form > :nth-child(3) > .column > .error')
          .should('contain', 'Please fill out all required fields.');
    });

    it('Displays message for incorrect password', () => {
        // Enter an email
        cy.get('#login_form > :nth-child(3) > .column > :nth-child(5) > .columns > label > input')
          .type('testuser@example.com');

        // Enter an incorrect password
        cy.get('#login_form > :nth-child(3) > .column > :nth-child(6) > .columns > label > input')
          .type('incorrectpwdtest');

        // Click the sign-in button
        cy.get('#login_form > :nth-child(3) > :nth-child(2) > .button').click();

        // Assert the specific message and the 'Forgot Password' link
        cy.get('.warning').within(() => {
            cy.contains('If you have an active account with 1000bulbs.com please click on the ');
            cy.get('a').should('have.text', 'Forgot Password');
            cy.contains(' link below to reset your password.');
        });
    });
});
