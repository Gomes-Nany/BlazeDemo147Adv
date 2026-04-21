#language: pt
Funcionalidade: Compra de passagem
  Cenario: compra com sucesso
     Dado que estou no site Blazedemo 
     Quando seleciono a origem como "São Paolo"
     E seleciono o destino como "London"
     E clico no botao "find flights"
     Entao verifica o texto "flights from São Paolo To London"
     E se a url contem "reserve"
     Quando seleciono o voo "9696" da companhia "Aer Lingus"
     Entao verifico se a URL contem "purchase"
     Quando preencho o nome como "Ayla Oliveira"
     E seleciono a bandeira do cartão como "amex"
     E marco a opcao "Remember me"
     E clico no botão "purchase Flight"
     Entao verifico se a URL contem "confirmation"
     E se exibe a mensagem de agradecimento "Thank you for your purchase today!"
     E se contem a informacao "Amount" como "555 USD" 

Esquema do Cenario: Compra com sucesso DDT
      Dado que estou no site Blazedemo 
     Quando seleciono a origem como "<origem>"
     E seleciono o destino como "<destino>"
     E clico no botao "find flights"
     Entao verifico o texto Flights from "<origem>" to "<destino>"
     E se a url contem "reserve"
     Quando seleciono o voo "<voo>" da companhia "<companhia>"
     Entao verifico se a URL contem "purchase"
     Quando preencho o nome como "<nome>"
     E seleciono a bandeira do cartão como "<bandeira>"
     E marco a opcao "Remember me"
     E clico no botão "purchase Flight"
     Entao verifico se a URL contem "confirmation"
     E se exibe a mensagem de agradecimento "Thank you for your purchase today!"
     E se contem a informacao "Amount" como "<preco>" 

Exemplos:
| Origem    | destino  | voo   | Companhia       | nome             | Bandeira           | Preco    |
| São Paolo | London   | 9696  | Aer Lingus      | Ayla Oliveira    | Visa               | 555 USD  |
| Portland  | Dublin   |  12   | Virgin America  | Gabriel Zanoni   | American Express   | 555 USD  |
| Boston    | New York |  34   | Lufthansa       | Victória Almeida | Dinner's Club      | 555 USD  |