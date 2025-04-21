import { LoginPageSelectors } from "../selectors/LoginPageSelectors";

export class LoginPage {
  // Acessa a tela de login de usuaários e valida url
  acessarPagina() {
    cy.visit("/login");
    cy.url().should("include", "/login");
  }

  // Preenche os campos nencessários de acordo com os testes
  preencherFormulario(usuario) {
    if (usuario.email) {
      cy.get(LoginPageSelectors.emailInput).clear().type(usuario.email);
    }
    if (usuario.senha) {
      cy.get(LoginPageSelectors.passwordInput).clear().type(usuario.senha);
    }
  }

  // Clica no botão responsável para entrar
  clicarEntrar() {
    cy.get(LoginPageSelectors.loginButton).click();
  }

  // Valida se o login foi realizado com sucesso usando o redirecionamento para a Home
  validarLoginComSucesso() {
    cy.url().should("include", "/home");
  }

  // Valida as mensagens de erro esperadas de acordo com cada teste
  validarMensagemDeErro(mensagemEsperada) {
    cy.get(LoginPageSelectors.alertaMensagem)
      .should("be.visible")
      .and("contain", mensagemEsperada);
  }
}
