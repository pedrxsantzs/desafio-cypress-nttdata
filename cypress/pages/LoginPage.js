import { LoginPageSelectors } from "../selectors/LoginPageSelectors";

export class LoginPage {
  acessarPagina() {
    cy.visit("/login");
    cy.url().should("include", "/login");
  }

  preencherFormulario(usuario) {
    if (usuario.email) {
      cy.get(LoginPageSelectors.emailInput).clear().type(usuario.email);
    }
    if (usuario.senha) {
      cy.get(LoginPageSelectors.passwordInput).clear().type(usuario.senha);
    }
  }

  clicarEntrar() {
    cy.get(LoginPageSelectors.loginButton).click();
  }

  validarLoginComSucesso() {
    cy.url().should("include", "/home");
  }

  validarMensagemDeErro(mensagemEsperada) {
    cy.get(LoginPageSelectors.alertaMensagem)
      .should("be.visible")
      .and("contain", mensagemEsperada);
  }
}
