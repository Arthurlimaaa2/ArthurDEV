/* Exercício:
Crie um arquivo soma.txt com números. Peça ao usuário um número inicial via input de texto e some todos os números do arquivo a esse número. Exiba o resultado.*/



// Importando os módulos necessários
const fs = require('fs');
const readline = require('readline');

// Criando a interface para leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntando ao usuário o número inicial
rl.question('Digite um número inicial: ', (numeroInicial) => {
    // Convertendo o input para número
    numeroInicial = Number(numeroInicial);

    // Lendo o arquivo soma.txt
    fs.readFile('soma.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        // Dividindo o conteúdo do arquivo em linhas e convertendo para números
        const numeros = data.split('\n').map(Number);

        // Somando todos os números ao número inicial
        const somaTotal = numeros.reduce((acc, num) => acc + num, numeroInicial);

        // Exibindo o resultado
        console.log(`A soma total é: ${somaTotal}`);

        // Fechando a interface de leitura
        rl.close();
    });
});