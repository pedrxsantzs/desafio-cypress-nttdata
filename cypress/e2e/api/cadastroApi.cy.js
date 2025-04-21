import { cadastrarUsuario } from "../../support/api/cadastroHelper";
import { faker } from "@faker-js/faker";

// --- Cenario de testes positivos
describe("API - Cadastro de Usuário com sucesso", () => {
  it("deve cadastrar um novo usuário com sucesso", () => {
    const novoUsuario = {
        nome: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: "true",
      };

    // Chama a função para cadastrar o novo usuário
    cadastrarUsuario(novoUsuario).then((response) => {
      // Valida o status da resposta
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");

      // Valida se o usuário foi realmente criado, fazendo uma requisição GET para buscar o usuário
      cy.request({
        method: "GET",
        url: `${Cypress.env("apiUrl")}/usuarios`,
      }).then((getResponse) => {
        expect(getResponse.status).to.eq(200);

        // Busca pelo usuário recém-cadastrado
        const usuarioCriado = getResponse.body.usuarios.find(
          (u) => u.email === novoUsuario.email
        );

        expect(usuarioCriado, "Usuário deve estar presente na listagem").to.exist;
        expect(usuarioCriado.nome).to.eq(novoUsuario.nome);
        expect(usuarioCriado.email).to.eq(novoUsuario.email);
        expect(usuarioCriado.administrador).to.eq(novoUsuario.administrador);
      });
    });
  });
});
