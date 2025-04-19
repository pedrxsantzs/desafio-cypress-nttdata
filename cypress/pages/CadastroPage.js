import { CadastroPageSelectors } from '../selectors/CadastroPageSelectors';

export class CadastroPage {
    // Acessa a página de cadastro
    acessarPagina() {
        cy.visit('/cadastrarusuarios');
        cy.url().should('include', '/cadastrarusuarios');
    }

    // Preenche o formulário de cadastro
    preencherFormulario(usuario) {
        cy.get(CadastroPageSelectors.nomeInput).type(usuario.nome);
        cy.get(CadastroPageSelectors.emailInput).type(usuario.email);
        cy.get(CadastroPageSelectors.passwordInput).type(usuario.senha);
        cy.get(CadastroPageSelectors.checkboxInput).click();
    }

    // Clica no botão de cadastro
    clicarCadastrar() {
        cy.get(CadastroPageSelectors.cadastrarButton).click();
    }

    // Valida se o cadastro foi bem-sucedido
    validarCadastro() {
        cy.contains(CadastroPageSelectors.sucessoMensagem).should('be.visible');
        cy.url().should('include', CadastroPageSelectors.urlHome);
    }
}
