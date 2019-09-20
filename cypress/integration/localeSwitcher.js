describe('(PL) Changing between locale version updates url accordingly', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-testid="locale-switcher-pl"]').as('switcher')
  })

  it('Projects', () => {
    cy.visit('/en/projects')
      .get('@switcher')
      .click({ force: true })
      .location('pathname')
      .should('eq', '/projects')
  })

  it('About', () => {
    cy.visit('/en/about')
      .get('@switcher')
      .click({ force: true })
      .location('pathname')
      .should('eq', '/about')
  })
})

describe('(EN) English locale switcher changes locale version', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-testid="locale-switcher-en"]').as('switcher')
  })

  it('Home page', () => {
    cy.get('@switcher')
      .click()
      .location('pathname')
      .should('eq', '/en')
  })

  it('Projects', () => {
    cy.visit('/projects')
      .get('@switcher')
      .click()
      .location('pathname')
      .should('eq', '/en/projects')
  })

  it('Blog', () => {
    cy.visit('/about')
      .get('@switcher')
      .click()
      .location('pathname')
      .should('eq', '/en/about')
  })
})
