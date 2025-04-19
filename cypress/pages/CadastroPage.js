export class CadastroPage {
    // Acessa a página de cadastro
    acessarPagina() {
        cy.visit('/cadastrarusuarios')
        cy.url().should('include', '/cadastrarusuarios')
    }

    // Preenche o formulário de cadastro
    preencherFormulario(usuario) {
        cy.get('[data-testid="nome"]').type(usuario.nome)
        cy.get('[data-testid="email"]').type(usuario.email)
        cy.get('[data-testid="password"]').type(usuario.senha)
        cy.get('[data-testid="checkbox"]').click()
    }

    // Clica no botão de cadastrar
    clicarCadastrar() {
        cy.get('[data-testid="cadastrar"]').click()
    }

    // Valida se o cadastro foi bem-sucedido
    validarCadastro() {
        cy.contains('Cadastro realizado com sucesso').should('be.visible')
        cy.url().should('include', '/admin/home')
    }
}
