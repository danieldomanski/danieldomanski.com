describe('Navigation routing works as designed', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Projects link', () => {
    cy.get('header > div > nav').within(() => {
      cy.findByText('Projekty').as('projekty')
    })

    cy.get('@projekty')
      .should('be.visible')
      .click({ force: true })
      .location('pathname')
      .should('include', 'projects')
  })

  it('Start link', () => {
    cy.get('header > div > nav').within(() => {
      cy.findByText('Start').as('start')
    })

    cy.get('@start')
      .should('be.visible')
      .click({ force: true })
      .location('pathname')
      .should('include', '')
  })

  it('Blog link', () => {
    cy.get('header > div > nav').within(() => {
      cy.findByText('Blog').as('blog')
    })

    cy.get('@blog')
      .should('be.visible')
      .click({ force: true })
      .location('pathname')
      .should('include', 'blog')
  })

  it('About link', () => {
    cy.get('header > div > nav').within(() => {
      cy.findByText('Ja').as('ja')
    })

    cy.get('@ja')
      .should('be.visible')
      .click({ force: true })
      .location('pathname')
      .should('include', 'about')
  })
})
