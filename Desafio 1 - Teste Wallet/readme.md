### Por algum motivo desconhecido o código gera a carteira, mas ao ir para o site "[Block Chain](https://www.blockchain.com/pt/explorer/)" e procurar, diz que o endereço não existe , também não e possível usar o site "[Bitcoin Faucet](https://bitcoinfaucet.uo1.net/)" para enviar btc test pelo mesmo motivo (carteira inexistente)

### Geração

![geração da carteira](https://github.com/Br8Mil/formacao-blockchain-dio/blob/main/Desafio%201%20-%20Teste%20Wallet/gera%C3%A7%C3%A3o.png)

### **ERRO**

![erro1](https://github.com/Br8Mil/formacao-blockchain-dio/blob/main/Desafio%201%20-%20Teste%20Wallet/erro1.png)
![erro2](https://github.com/Br8Mil/formacao-blockchain-dio/blob/main/Desafio%201%20-%20Teste%20Wallet/erro2.png)

**OBS:**
1. Mesmo pedindo pra ia revisar o meu código não foi encontrado erros (também comparei com o dado pelo expert).

2. mesmo rodando o código disponibilizado pelo expert não funciona (slides e material de apoio\Dados do Fork\Modulo 01 Fundamentos da Blockchain\Curso 01 Introducao a Blockchain\Criando e utilizando a sua carteira de criptomoedas), o mesmo gera a carteira no **log**, mas a mesma não aprece nas busca do block chain.

3. Concusão se nem o meu da certo e o dele também (nem a ia da microsoft - copilot viu nada de errado nos dois) não e possível que o problema não seja no código e sim algo na minha máquina.

## **Aviso 1**
- Programas usados

> [Node js](https://nodejs.org/en/download/package-manager/current)

> [Electrum - Caso a carteira tivesse sucesso na criação](https://electrum.org/#download)

Depois de instalar e necessário mudar o destino do atalho como na imagem abaixo colocando **--testnet** no final para habilitar o mesmo para carteira de teste.

![exemplo]()

> [Bitcoin Faucet - Receber cripto de teste](https://bitcoinfaucet.uo1.net/)

> [Blockchain - Verificar se tal carteira existe](https://www.blockchain.com/pt/explorer/)

## **Aviso 2**

Se quizer etstar a cateira e necessário antes ter o [Node js](https://nodejs.org/en/download/package-manager/current
) instalado.

Caso queira testar com a última versão das bibliotecas, delete a pasta “**node\_modules**” e dos dois arquivos “**package**” e “**package-lock**”. Abra o [VS Code](https://code.visualstudio.com/download) ou programa e escolha a pasta “**bitcointestnet**”, dentro do programa abra o terminal e digite os seguintes comandos


- **Comando (vai criar o arquivo package)**

        > npm init -y

- **Comando (espere baixar os arquivos)**

        > npm install bip39 bip32@2.0.6 bitcoinjs-lib --save

- **Comando (vai executar o script e retornar o log contendo a chave pública, privada e a mnemonic)**

        > node .\src\createWallet.js
