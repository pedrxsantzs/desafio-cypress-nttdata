// -- Arquivo separado para implementar comandos reutilizáveis

Cypress.Commands.add('fazerLogin', (email, senha) => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type(email)
    cy.get('[data-cy=password]').type(senha)
    cy.get('[data-cy=submit]').click()
  })