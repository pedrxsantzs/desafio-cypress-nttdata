export function realizarLogin(usuario) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env('apiUrl')}/login`,
      body: {
        email: usuario.email,
        password: usuario.password
      },
      failOnStatusCode: false
    });
  }
  