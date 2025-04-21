import { realizarLogin } from "../../support/api/loginHelper";

describe("API - Login de usuário com sucesso", () => {
  it("deve realizar login com sucesso e retornar token", () => {
    cy.fixture("usuarioLoginApi").then((usuario) => {
      realizarLogin(usuario).then((response) => {
        // Valida status da requisição
        expect(response.status).to.eq(200);

        // Valida se o token está presente
        expect(response.body)
          .to.have.property("authorization")
          .and.to.be.a("string");

        // Valida se o token parece ser JWT (3 partes separadas por ponto)
        const token = response.body.authorization;
        expect(token.split(".")).to.have.length(3);

        // Loga o tempo de resposta
        cy.log(`Tempo de resposta: ${response.duration}ms`);
      });
    });
  });
});

describe("API - Login com usuário inválido", () => {
  it("deve retornar erro ao tentar login com credenciais inválidas", () => {
    const usuarioInvalido = {
      email: "inexistente@email.com",
      password: "senhaerrada123",
    };

    realizarLogin(usuarioInvalido).then((response) => {
      // Valida status de erro
      expect(response.status).to.eq(401);

      // Valida mensagem de erro esperada
      expect(response.body.message).to.eq("Email e/ou senha inválidos");
    });
  });
});
