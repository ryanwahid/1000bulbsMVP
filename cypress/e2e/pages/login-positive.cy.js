describe('1000bulbs Login Test', () => {
    it('Tests the login functionality with error handling', () => {
        // Handle any uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        });

        // Visit the website
        cy.visit('https://www.1000bulbs.com/');

        // Verify the page loads
        cy.url().should('include', '1000bulbs.com');

        // Navigate to the login page
        cy.get('.fi-torso').click();

        // Assert the URL of the login page
        cy.url().should('eq', 'https://www.1000bulbs.com/login');

        // Enter the email address
        cy.get('#login_form > :nth-child(3) > .column > :nth-child(5) > .columns > label > input')
          .type('ryanwahid@gmail.com');

        // Enter the password
        cy.get('#login_form > :nth-child(3) > .column > :nth-child(6) > .columns > label > input')
          .type('6Dka8SGFJ!c1Ruk$');

        // Assert the button contains the correct text
        cy.get('#login_form > :nth-child(3) > :nth-child(2) > .button')
          .should('contain', 'Sign in for fast checkout');  

        // Click the sign-in button
        cy.get('#login_form > :nth-child(3) > :nth-child(2) > .button').click();

    });
});
