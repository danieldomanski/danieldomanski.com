describe('Polish locale switcher changes locale version', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Changing between locale version updates url accordingly', () => {
    cy.get('[data-testid="locale-switcher-pl"]').as('switcher')

    cy.get('@switcher')
      .click()
      .location('pathname')
      .should('eq', '/')

    cy.visit('en/projects')
      .get('@switcher')
      .click()
      .location('pathname')
      .should('eq', '/projects')

    cy.visit('en/blog')
      .get('@switcher')
      .click()
      .location('pathname')
      .should('eq', '/blog')
  })
})

describe('English locale switcher changes locale version', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Changing between locale version updates url accordingly', () => {
    cy.get('[data-testid="locale-switcher-en"]').as('switcher')

    cy.get('@switcher')
      .click()
      .location('pathname')
      .should('eq', '/en')

    cy.visit('/projects')
      .get('@switcher')
      .click()
      .location('pathname')
      .should('eq', '/en/projects')
  })
})
