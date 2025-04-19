import { CadastroPage } from '../../pages/CadastroPage'
import { gerarUsuario } from '../../utils/usuarioCadastro'

describe('Cadastro', () => {
    it('deve cadastrar novo usuário com sucesso', () => {
        const usuario = gerarUsuario()

        const cadastroPage = new CadastroPage()

        // Acessa a página de cadastro
        cadastroPage.acessarPagina()

        // Preenche o formulário com dados do usuário
        cadastroPage.preencherFormulario(usuario)

        // Clica no botão de cadastro
        cadastroPage.clicarCadastrar()

        // Validações
        cadastroPage.validarCadastro()
    })
})