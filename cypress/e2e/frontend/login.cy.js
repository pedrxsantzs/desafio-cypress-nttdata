import { LoginPage } from "../../pages/LoginPage";

describe("Login de usuário com sucesso", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.acessarPagina();
  });

  it("deve realizar login com sucesso", () => {
    cy.fixture("usuarioLogin").then((usuario) => {
      loginPage.preencherFormulario(usuario);
      loginPage.clicarEntrar();
      loginPage.validarLoginComSucesso();
    });
  });
});

describe("Login de usuário com erro", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.acessarPagina();
  });

  it("deve exibir erro ao tentar login com usuário inválido", () => {
    const usuarioInvalido = {
      email: "invalido@teste.com",
      senha: "senhaerrada",
    };

    loginPage.preencherFormulario(usuarioInvalido);
    loginPage.clicarEntrar();
    loginPage.validarMensagemDeErro("Email e/ou senha inválidos");
  });

  it("deve exibir erro ao tentar login sem preencher campos obrigatórios", () => {
    const usuario = {
      email: "",
      senha: "",
    };
    loginPage.preencherFormulario(usuario);
    loginPage.clicarEntrar();
    loginPage.validarMensagemDeErro("Email é obrigatório");
    loginPage.validarMensagemDeErro("Password é obrigatório");
  });

  it("deve exibir erro ao tentar login sem preencher o campo email", () => {
    const usuario = {
      email: "",
      senha: "qualquerSenha",
    };
    loginPage.preencherFormulario(usuario);
    loginPage.clicarEntrar();
    loginPage.validarMensagemDeErro("Email é obrigatório");
  });
  it("deve exibir erro ao tentar login sem preencher o campo senha", () => {
    const usuario = {
      email: "qualquerEmail@teste.com",
      senha: "",
    };
    loginPage.preencherFormulario(usuario);
    loginPage.clicarEntrar();
    loginPage.validarMensagemDeErro("Password é obrigatório");
  });
  it("deve exibir erro ao tentar login com email em formato inválido", () => {
    const usuario = {
      email: "qualquerEmail@com",
      senha: "qualquerSenha",
    };
  
    loginPage.preencherFormulario(usuario);
    loginPage.clicarEntrar();
    loginPage.validarMensagemDeErro("Email deve ser um email válido");
  });
  
});
