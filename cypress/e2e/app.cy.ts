describe('FidZulu First Test', () => {
  it('Visits the landing page', () => {
    cy.visit('/');
    cy.get('app-root h1').contains('Baravan: Explore and Learn with Us');
  })
})
