# Wallet

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido nesse projeto</strong></summary><br />

Neste projeto foi desenvolvido uma carteira de controle de gastos com conversor de moedas, utilizando Redux React, ao utilizar essa aplicação o usuário é capaz de:

- Adicionar, remover e editar um gasto;
- Visualizar uma tabelas com seus gastos;
- Visualizar o total de gastos convertidos para uma moeda de escolha;

</details>

<details>
  <summary><strong>💫 Habilidades</strong></summary><br />

Neste projeto foi aplicado os seguintes conceitos:

- Criar um _store_ Redux em aplicações React

- Criar _reducers_ no Redux em aplicações React

- Criar _actions_ no Redux em aplicações React

- Criar _dispatchers_ no Redux em aplicações React

- Conectar Redux aos componentes React

- Criar _actions_ assíncronas na sua aplicação React que faz uso de Redux.

</details>

## Baixe o projeto na sua máquina

1. Clone o repositório

- Use o comando: `git clone git@github.com:raynarastg/Project-Wallet.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd Project-Wallet`

2. Instale as dependências

- `npm install`

3. Veja a aplicação no browser

- `npm start`

<details><summary><b>🤑 Documentação da API de Cotações de Moedas</b></summary>

A página _web_ consumiu os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, foi acessado o seguinte _endpoint_:

- <https://economia.awesomeapi.com.br/json/all>

O retorno do endpoint tem o seguinte formato:

```json
{
  {
    "USD": {
      "code":"USD",
      "codein":"BRL",
      "name":"Dólar Americano/Real Brasileiro",
      "high":"5.6689",
      "low":"5.6071",
      "varBid":"-0.0166",
      "pctChange":"-0.29",
      "bid":"5.6173",
      "ask":"5.6183",
      "timestamp":"1601476370",
      "create_date":"2020-09-30 11:32:53"
      },
      ...
  }
}
```

</details><br />
