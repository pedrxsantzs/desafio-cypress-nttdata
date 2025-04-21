import { ProdutoPageSelectors } from "../selectors/ProdutoPageSelectors";

export class ProdutoPage {
  // Acessa a tela de cadastro de produto e valida url
  navegarParaCadastro() {
    cy.get(ProdutoPageSelectors.acessarCadastroProdutoBtn).click();
    cy.url().should("include", "/admin/cadastrarprodutos");
  }

  // Preenche os campos nencessários de acordo com os testes
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

  // Clica no botão responsável para cadastrar produto como administrador
  clicarCadastrar() {
    cy.get(ProdutoPageSelectors.cadastrarButton).click();
  }

  // Valida se o cadastro foi realizado com sucesso e a url de redirecionamento
  validarCadastro() {
    cy.url().should("include", "/admin/listarprodutos");
  }

  // Valida as mensagens de erro esperadas de acordo com cada teste
  validarMensagemDeErro(mensagemEsperada) {
    cy.get(ProdutoPageSelectors.alertaMensagem)
      .should("be.visible")
      .and("contain", mensagemEsperada);
  }
}
