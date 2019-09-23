describe('Footer tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Footer has two links', () => {
    cy.get('[data-testid="footer"]')
      .first()
      .children()
      .within(() => {
        cy.get('a').should('have.length', '2')
      })
  })

  it('Footer contains link with email adress', () => {
    cy.get('[data-testid="footer"]')
      .children()
      .within(() => {
        cy.get('a')
          .should('have.attr', 'href')
          .and('include', 'mailto:')
      })
  })
})
