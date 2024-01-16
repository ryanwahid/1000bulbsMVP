describe('1000bulbs Search Functionality Test', () => {
    // Handle any uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
    });

    it('Tests the search functionality for "c9 led bulbs"', () => {
        // Visit the website
        cy.visit('https://www.1000bulbs.com/');

        // Type the search text into the search field
        cy.get('#search_field').type('c9 led bulbs');

        // Click the search button
        cy.get('#search_button_med > .fi-magnifying-glass').click();

        // Assert that the output text includes "c9 led bulbs"
        cy.get('.new-filter-results-show > strong').should('include.text', 'c9 led bulbs');

        // Take a screenshot of the page after the search
        cy.screenshot('search-results');
    });
});
