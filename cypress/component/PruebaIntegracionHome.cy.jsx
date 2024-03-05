describe('renders the table internal components', () => {
  it('renders the name of each person', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="usuario"]').should('exist');
  });

  it('renders the delete option of each person', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="contrasena"]').should('exist');
  });
});
