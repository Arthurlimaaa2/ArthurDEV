/*Input
Entrada de Dados
Input de Texto: Utiliza o módulo readline para ler entradas do usuário via terminal.

Input de Arquivo: Utiliza o módulo fs para ler arquivos.

Exemplos:
Input de Texto:

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o módulo para ler dados no Node? ', (resposta) => {
    console.log(`Sua resposta: ${resposta}`);
    rl.close();
});
//Saída: Pergunta ao usuário e exibe a resposta.

//Input de Arquivo:

const fs = require('fs');
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) console.error(err);
    else console.log(data);
});
//Saída: Conteúdo do arquivo arquivo.txt.*/

const readline = require("readline")
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

leitor.question("Qual módulo pra ler dados no node.js?", function (resposta) {
    console.log("\nSua resposta `" + resposta + "");
    leitor.close();
});





