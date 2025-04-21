import { realizarLogin } from "../../support/api/loginHelper";
import { cadastrarProduto } from "../../support/api/produtoHelper";
import { faker } from "@faker-js/faker";

describe("API - Cadastro de Produto", () => {
  it("deve cadastrar um novo produto com sucesso", () => {
    cy.fixture("usuarioLoginApi").then((admin) => {
      realizarLogin(admin).then((loginResponse) => {
        const token = loginResponse.body.authorization;

        const novoProduto = {
          nome: faker.commerce.productName(),
          preco: faker.number.int({ min: 1, max: 1000 }),
          descricao: faker.commerce.productDescription(),
          quantidade: faker.number.int({ min: 1, max: 100 }),
        };

        cadastrarProduto(token, novoProduto).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.message).to.eq("Cadastro realizado com sucesso");

          cy.request({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/produtos`,
          }).then((getResponse) => {
            expect(getResponse.status).to.eq(200);

            const produtoCriado = getResponse.body.produtos.find(
              (p) => p.nome === novoProduto.nome
            );
            expect(produtoCriado, "Produto deve estar presente na listagem").to
              .exist;
            expect(produtoCriado.nome).to.eq(novoProduto.nome);
          });
        });
      });
    });
  });
});
