import { faker } from '@faker-js/faker'

export const gerarUsuario = () => {
    const nome = faker.name.fullName()
    const email = faker.internet.email()
    const senha = faker.internet.password()

    return {
        nome,
        email,
        senha
      }
  }