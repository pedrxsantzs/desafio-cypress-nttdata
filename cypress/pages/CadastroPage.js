import { CadastroPageSelectors } from "../selectors/CadastroPageSelectors";

export class CadastroPage {
  // Acessa a tela de cadastro de usuaários e valida url
  acessarPagina() {
    cy.visit("/cadastrarusuarios");
    cy.url().should("include", "/cadastrarusuarios");
  }

  // Preenche os campos nencessários de acordo com os testes
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

  // Clica no botão responsável para cadastrar usuário como administrador
  clicarCadastrarAdministrador(){
    cy.get(CadastroPageSelectors.checkboxInput).click();
  }

  // Clica no botão responsável para finalizar o cadastro
  clicarCadastrar() {
    cy.get(CadastroPageSelectors.cadastrarButton).click();
  }

  // Valida se o cadastro foi realizado com sucesso e a url de redirecionamento
  validarCadastro() {
    cy.contains(CadastroPageSelectors.sucessoMensagem).should("be.visible");
    cy.url().should("include", CadastroPageSelectors.urlHome);
  }

  // Valida as mensagens de erro esperadas de acordo com cada teste
  validarMensagemDeErroEsperada(mensagemEsperada) {
    cy.get(CadastroPageSelectors.alertaMensagem)
      .should("be.visible")
      .and("contain", mensagemEsperada);
  }
}
