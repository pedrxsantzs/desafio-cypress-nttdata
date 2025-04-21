import { CadastroPage } from "../../pages/CadastroPage";
import { gerarUsuario } from "../../utils/usuarioCadastro";

// --- Cenario de testes positivos
describe("Cadastro de usuário com sucesso", () => {
  const cadastroPage = new CadastroPage();

  beforeEach(() => {
    cadastroPage.acessarPagina();
  });

  it("deve cadastrar novo usuário com sucesso", () => {
    const usuario = gerarUsuario();

    cadastroPage.preencherFormulario(usuario);
    cadastroPage.clicarCadastrarAdministrador();
    cadastroPage.clicarCadastrar();
    cadastroPage.validarCadastro();
  });
});

// --- Cenario de testes negativos
describe("Cadastro de usuário com erro", () => {
  const cadastroPage = new CadastroPage();

  beforeEach(() => {
    cadastroPage.acessarPagina();
  });

  it("deve exibir mensagem de erro ao tentar cadastrar sem preencher nome", () => {
    const usuario = {
      email: "teste@email.com",
      senha: "senha123",
    };

    cadastroPage.preencherFormulario(usuario);
    cadastroPage.clicarCadastrar();
    cadastroPage.validarMensagemDeErroEsperada("Nome é obrigatório");
  });

  it("deve exibir mensagem de erro ao tentar cadastrar sem preencher email", () => {
    const usuario = {
      nome: "Teste Teste",
      senha: "senha123",
    };

    cadastroPage.preencherFormulario(usuario);
    cadastroPage.clicarCadastrar();
    cadastroPage.validarMensagemDeErroEsperada("Email é obrigatório");
  });

  it("deve exibir mensagem de erro ao tentar cadastrar sem preencher senha", () => {
    const usuario = {
      nome: "Teste Teste",
      email: "teste@email.com",
    };

    cadastroPage.preencherFormulario(usuario);
    cadastroPage.clicarCadastrar();
    cadastroPage.validarMensagemDeErroEsperada("Password é obrigatório");
  });

  it("deve exibir mensagem de erro ao tentar cadastrar com email inválido", () => {
    const usuario = {
      nome: "Teste Teste",
      email: "t@com",
      senha: "senha123",
    };

    cadastroPage.preencherFormulario(usuario);
    cadastroPage.clicarCadastrar();
    cadastroPage.validarMensagemDeErroEsperada(
      "Email deve ser um email válido"
    );
  });

  it("deve exibir mensagem de erro ao tentar cadastrar com email já usado", () => {
    const usuario = {
      nome: "Teste Teste",
      email: "profissional.pedroa@gmail.com",
      senha: "senha123",
    };

    cadastroPage.preencherFormulario(usuario);
    cadastroPage.clicarCadastrar();
    cadastroPage.validarMensagemDeErroEsperada(
      "Este email já está sendo usado"
    );
  });
});
