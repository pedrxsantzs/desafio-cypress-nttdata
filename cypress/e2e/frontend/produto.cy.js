import { LoginPage } from "../../pages/LoginPage";
import { ProdutoPage } from "../../pages/ProdutoPage";
import { faker } from "@faker-js/faker";

describe("Cadastro de produto com sucesso", () => {
  const loginPage = new LoginPage();
  const produtoPage = new ProdutoPage();

  beforeEach(() => {
    cy.fixture("usuarioLogin").then((usuario) => {
      loginPage.acessarPagina();
      loginPage.preencherFormulario(usuario);
      loginPage.clicarEntrar();
      cy.url().should("include", "/admin/home");
      produtoPage.navegarParaCadastro();
    });
  });

  it("deve cadastrar um novo produto com sucesso", () => {
    const produto = {
      nome: faker.commerce.productName(),
      preco: faker.number.int({ min: 10, max: 1000 }).toString(),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 100 }),
      imagem: "cypress/fixtures/camisadryfit.png",
    };

    produtoPage.preencherFormulario(produto);

    produtoPage.clicarCadastrar();

    produtoPage.validarCadastro();
  });
});
