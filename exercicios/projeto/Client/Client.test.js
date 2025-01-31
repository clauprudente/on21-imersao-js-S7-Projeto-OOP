import Account from "../Account/Account.js";
import Client from "./Client.js";

describe("Teste da classe Client", () => {
  test("verificar se instancia do Client é feita corretamente", () => {
    const client = new Client();
    // instanciaASerVerificada instanceof Classe -> true ou false
    // alternativa: expect(client).toBeInstanceOf(Client);
    expect(client instanceof Client).toBe(true);
  });

  test("cadastrar cliente com dados válidos", () => {
    const client = new Client();
    const account = new Account();
    expect(client.registerClient("Ana", "1234567908", account, 5000)).toBe(
      "Cliente cadastrado"
    );
  });

  test("cadastrar cliente com dados inválidos", () => {
    const client = new Client();
    expect(() =>
      client.registerClient("Ana", "1234567908", "não conta", 5000)
    ).toThrow("Erro no cadastro, dados inválidos");
  });

  test("cadastrar cliente standard", () => {
    const client = new Client();
    const account = new Account();
    expect(client.registerClient("Ana", "1234567908", account, 3000)).toBe(
      "Cliente cadastrado"
    );
    expect(client.accountCategory).toBe("standard");
  });
  test("cadastrar cliente gold", () => {
    const client = new Client();
    const account = new Account();
    expect(client.registerClient("Ana", "1234567908", account, 10000)).toBe(
      "Cliente cadastrado"
    );
    expect(client.accountCategory).toBe("gold");
  });
  test("cadastrar cliente premium", () => {
    const client = new Client();
    const account = new Account();
    expect(client.registerClient("Ana", "1234567908", account, 20000)).toBe(
      "Cliente cadastrado"
    );
    expect(client.accountCategory).toBe("premium");
  });
});
