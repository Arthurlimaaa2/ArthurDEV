// Crie um programa que imprima uma lista de livros lidos no ano, com os campos: título, autor, ano e editora. Use console.table para exibir os dados e console.time para medir o tempo de execução.

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
