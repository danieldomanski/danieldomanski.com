describe('Navigation routing works as designed', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Projects link', () => {
    cy.visit('/')
      .get('[data-testid="nav"]')
      .within(() => {
        cy.findByText('Projekty')
          .click({ force: true })
          .location('pathname')
          .should('eq', '/projects')
      })
  })

  it('Start link', () => {
    cy.get('[data-testid="nav"]').within(() => {
      cy.findByText('Start')
        .click({ force: true })
        .location('pathname')
        .should('eq', '/')
    })
  })

  it('Blog link', () => {
    cy.get('[data-testid="nav"]').within(() => {
      cy.findByText('Blog')
        .click({ force: true })
        .location('pathname')
        .should('eq', '/blog')
    })
  })

  it('About link', () => {
    cy.get('[data-testid="nav"]').within(() => {
      cy.findByText('Ja')
        .click({ force: true })
        .location('pathname')
        .should('eq', '/about')
    })
  })
})

describe('English navigation routing works as designed', () => {
  beforeEach(() => {
    cy.visit('/en')
  })

  it('Projects link', () => {
    cy.get('header > div > nav').within(() => {
      cy.findByText('Projects').as('projekty')
    })

    cy.get('@projekty')
      .should('be.visible')
      .click()
      .location('pathname')
      .should('eq', '/en/projects')
  })

  it('Start link', () => {
    cy.get('header > div > nav').within(() => {
      cy.findByText('Home').as('start')
    })

    cy.get('@start')
      .should('be.visible')
      .click({ force: true })
      .location('pathname')
      .should('eq', '/en')
  })

  it('Blog link', () => {
    cy.get('header > div > nav').within(() => {
      cy.findByText('Blog').should('not.be.visible')
    })
  })

  it('About link', () => {
    cy.get('header > div > nav').within(() => {
      cy.findByText('Me').as('ja')
    })

    cy.get('@ja')
      .should('be.visible')
      .click({ force: true })
      .location('pathname')
      .should('include', '/en/about')
  })
})
