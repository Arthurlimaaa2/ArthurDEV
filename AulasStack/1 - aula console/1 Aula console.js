/* Aula CONSOLE

                Console

Função do Console: 
O console é utilizado para fazer saídas no terminal, principalmente para depuração debug de aplicações.

        Métodos do Console:

console.log Exibe mensagens no terminal.

console.error Exibe erros.

console.warn Exibe avisos.

console.table Exibe dados em formato de tabela.

console.time e console.timeEnd: Medem o tempo de execução de um trecho de código.

console.clear Limpa o terminal.);-*/

//Exemplos:

// 1 - console.log
// console.log("Hello DevStackX");
// Saída: Hello DevStackX//

// console.warn("warning")

// 2 - console.table
//console.table([{ titulo: "Livro 1", autor: "Autor 1", ano: 2021, editora: "Editora A" }]);
//Saída: Uma tabela com os dados.//

// 3 - console.time
//console.time("tempoExecucao");
// Código a ser medido//
//console.timeEnd("tempoExecucao");
//Saída: Tempo de execução em milissegundos.

//EXERCICIOS:


//Crie um programa que imprima uma lista de livros lidos no ano, com os campos: título, autor, ano e editora. Use console.table para exibir os dados e console.time para medir o tempo de execução.

const Livros = [
        { Titulo: 'Livro 1', autor: 'Autor 1', ano: 2020, Editora: 'Editora 1' },
        { Titulo: 'Livro 2', autor: 'Autor 2', ano: 2022, Editora: 'Editora 2' },
        { Titulo:'Livro 3', autor: 'Autor 3', ano: 2023, Editora: 'Editora 3' },
      ];

      console.table([
        { Titulo: 'Livro 1', autor: 'Autor 1', ano: 2020, Editora: 'Editora 1' },
        { Titulo: 'Livro 2', autor: 'Autor 2', ano: 2022, Editora: 'Editora 2' },
        { Titulo:'Livro 3', autor: 'Autor 3', ano: 2023, Editora: 'Editora 3' },
      ]);
      console.time("tempo de execução");




