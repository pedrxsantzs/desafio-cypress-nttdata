import { ProdutoPageSelectors } from "../selectors/ProdutoPageSelectors";

export class ProdutoPage {

  navegarParaCadastro() {
    cy.get(ProdutoPageSelectors.acessarCadastroProdutoBtn).click();
    cy.url().should("include", "/admin/cadastrarprodutos");
  }

  preencherFormulario(produto) {
    if (produto.nome) {
      cy.get(ProdutoPageSelectors.nomeInput).type(produto.nome);
    }
    if (produto.preco) {
      cy.get(ProdutoPageSelectors.precoInput).type(produto.preco);
    }
    if (produto.descricao) {
      cy.get(ProdutoPageSelectors.descricaoInput).type(produto.descricao);
    }
    if (produto.quantidade) {
      cy.get(ProdutoPageSelectors.quantidadeInput).type(produto.quantidade);
    }
    if (produto.imagem) {
      cy.get(ProdutoPageSelectors.imagemInput).selectFile(produto.imagem, {
        force: true,
      });
    }
  }

  clicarCadastrar() {
    cy.get(ProdutoPageSelectors.cadastrarButton).click();
  }

  validarCadastro() {
    cy.url().should("include", "/admin/listarprodutos");
  }

  validarMensagemDeErro(mensagemEsperada) {
    cy.get(ProdutoPageSelectors.alertaMensagem)
      .should("be.visible")
      .and("contain", mensagemEsperada);
  }
}
