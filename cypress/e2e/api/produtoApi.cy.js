import { realizarLogin } from "../../support/api/loginHelper";
import { cadastrarProduto } from "../../support/api/produtoHelper";
import { faker } from "@faker-js/faker";

// --- Cenario de testes positivos
describe("API - Cadastro de Produto", () => {
  it("deve cadastrar um novo produto com sucesso", () => {
    // Carrega os dados do usuário administrador a partir do fixture
    cy.fixture("usuarioLoginApi").then((admin) => {
      
      // Realiza login e obtém o token de autenticação
      realizarLogin(admin).then((loginResponse) => {
        const token = loginResponse.body.authorization;

        // Gera dados dinâmicos para o novo produto usando Faker
        const novoProduto = {
          nome: faker.commerce.productName(),
          preco: faker.number.int({ min: 1, max: 1000 }),
          descricao: faker.commerce.productDescription(),
          quantidade: faker.number.int({ min: 1, max: 100 }),
        };

        // Realiza o cadastro do produto com o token obtido
        cadastrarProduto(token, novoProduto).then((response) => {
          // Valida status de sucesso na criação
          expect(response.status).to.eq(201);

          // Valida mensagem de sucesso retornada pela API
          expect(response.body.message).to.eq("Cadastro realizado com sucesso");

          // Requisição para listar todos os produtos
          cy.request({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/produtos`,
          }).then((getResponse) => {
            // Valida resposta da listagem
            expect(getResponse.status).to.eq(200);

            // Verifica se o produto criado está presente na lista
            const produtoCriado = getResponse.body.produtos.find(
              (p) => p.nome === novoProduto.nome
            );
            expect(produtoCriado, "Produto deve estar presente na listagem").to.exist;

            // Valida o nome do produto criado
            expect(produtoCriado.nome).to.eq(novoProduto.nome);
          });
        });
      });
    });
  });
});
