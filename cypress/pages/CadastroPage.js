import { CadastroPageSelectors } from "../selectors/CadastroPageSelectors";

export class CadastroPage {
  acessarPagina() {
    cy.visit("/cadastrarusuarios");
    cy.url().should("include", "/cadastrarusuarios");
  }

  preencherFormulario(usuario) {
    if (usuario.nome) {
      cy.get(CadastroPageSelectors.nomeInput).type(usuario.nome);
    }
    if (usuario.email) {
      cy.get(CadastroPageSelectors.emailInput).type(usuario.email);
    }
    if (usuario.senha) {
      cy.get(CadastroPageSelectors.passwordInput).type(usuario.senha);
    }
  }

  clicarCadastrarAdministrador(){
    cy.get(CadastroPageSelectors.checkboxInput).click();
  }

  clicarCadastrar() {
    cy.get(CadastroPageSelectors.cadastrarButton).click();
  }

  validarCadastro() {
    cy.contains(CadastroPageSelectors.sucessoMensagem).should("be.visible");
    cy.url().should("include", CadastroPageSelectors.urlHome);
  }

  validarMensagemDeErroEsperada(mensagemEsperada) {
    cy.get(CadastroPageSelectors.alertaMensagem)
      .should("be.visible")
      .and("contain", mensagemEsperada);
  }
}
