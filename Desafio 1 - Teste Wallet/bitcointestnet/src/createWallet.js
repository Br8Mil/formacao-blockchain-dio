//Importação de dependêcias
const bip39 = require("bip39")
const bip32 = require("bip32")
const bitcoin = require("bitcoinjs-lib")


//Definição da rede
//caso queira a main net, subistitua testnet por bitcoin
const network = bitcoin.networks.testnet


//Derivação de Carteira HD
const path = `m/49'/1'/0'/0`


//ciação da chave mnemonica
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)


//Serve para criar a raiz da carteira HD
let root = bip32.fromSeed(seed, network)


//Criação da conta - chave priavada e pública
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Gerado com sucesso")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ", node.toWIF())
console.log("Seed:", mnemonic)