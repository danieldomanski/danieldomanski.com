describe('Buttons under each slide works and routes to appropiate page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('About me section link works', () => {
    cy.get('#about').within(() => {
      cy.findByText('Więcej o mnie').as('button')
    })

    cy.get('@button')
      .should('be.visible')
      .click()
      .location('pathname')
      .should('include', 'about')
  })

  it('Projects section link works', () => {
    cy.get('#projects').within(() => {
      cy.findByText('Wszystkie projekty').as('button')
    })

    cy.get('@button')
      .should('be.visible')
      .click()
      .location('pathname')
      .should('include', 'projects')
  })

  it('Blog section link works', () => {
    cy.get('#blog').within(() => {
      cy.findByText('Wszystkie artykuły').as('button')
    })

    cy.get('@button')
      .should('be.visible')
      .click()
      .location('pathname')
      .should('include', 'blog')
  })
})

describe('Projects elements navigates to appropiate project', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Projects is clickable and navigates to projects dir', () => {
    cy.get('#projects').within(() => {
      cy.get('a')
        .first()
        .as('project')
    })

    cy.get('@project')
      .should('be.visible')
      .click()
      .location('pathname')
      .should('include', 'projects/')
  })
})
