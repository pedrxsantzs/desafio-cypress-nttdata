export function cadastrarProduto(token, produto) {
  return cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/produtos`,
    headers: {
      Authorization: token,
    },
    body: produto,
    failOnStatusCode: false,
  });
}
