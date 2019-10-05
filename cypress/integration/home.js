describe('Buttons under each slide works and routes to appropiate page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('About me section link renders and navigates accordingly', () => {
    cy.get('#about').within(() => {
      cy.findByText('Poznaj mnie lepiej').as('button')
    })

    cy.get('@button')
      .should('be.visible')
      .click()
      .location('pathname')
      .should('include', 'about')
  })

  it('More Projects section link renderr and navigates accordingly', () => {
    cy.get('#projects').within(() => {
      cy.findByText('Wszystkie projekty').as('button')
    })

    cy.get('@button')
      .should('be.visible')
      .click()
      .location('pathname')
      .should('include', 'projects')
  })

  it('Blog section link renders and navigates accordingly', () => {
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

describe('Project cover navigates to individual project', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Project Case is clickable and navigates to appropiate project', () => {
    cy.get('[data-testid="project-item"]')
      .first()
      .as('project')

    cy.get('@project')
      .click({ force: true })
      .location('pathname')
      .should('include', 'projects/')
  })
})

describe('Post elements navigates to appropiate post', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Post is clickable and navigates to appropiate project', () => {
    cy.get('[data-testid="post-item"]')
      .first()
      .as('post')

    cy.get('@post')
      .click({ force: true })
      .location('pathname')
      .should('include', 'blog/')
  })
})
