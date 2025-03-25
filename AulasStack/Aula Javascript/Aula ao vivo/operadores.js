// operadores.js
// Este arquivo contém exemplos e explicações dos principais operadores em JavaScript.

// 1. Operadores Aritméticos
console.log("=== Operadores Aritméticos ===");
let a = 10;
let b = 3;

console.log(a + b); // Adição: 10 + 3 = 13
console.log(a - b); // Subtração: 10 - 3 = 7
console.log(a * b); // Multiplicação: 10 * 3 = 30
console.log(a / b); // Divisão: 10 / 3 ≈ 3.333
console.log(a % b); // Módulo (resto da divisão): 10 % 3 = 1
console.log(a ** b); // Exponenciação: 10 ** 3 = 1000
console.log(a++); // Incremento pós-fixo: retorna 10, depois a = 11
console.log(++a); // Incremento pré-fixo: a = 12, retorna 12
console.log(b--); // Decremento pós-fixo: retorna 3, depois b = 2
console.log(--b); // Decremento pré-fixo: b = 1, retorna 1

// 2. Operadores de Atribuição
console.log("\n=== Operadores de Atribuição ===");
let x = 5;
x += 3; // Equivalente a x = x + 3 → x = 8
console.log(x);

x -= 2; // Equivalente a x = x - 2 → x = 6
console.log(x);

x *= 2; // Equivalente a x = x * 2 → x = 12
console.log(x);

x /= 3; // Equivalente a x = x / 3 → x = 4
console.log(x);

x %= 3; // Equivalente a x = x % 3 → x = 1
console.log(x);

x **= 2; // Equivalente a x = x ** 2 → x = 1
console.log(x);

// 3. Operadores de Comparação
console.log("\n=== Operadores de Comparação ===");
console.log(5 == "5"); // Igualdade (valor): true
console.log(5 === "5"); // Igualdade estrita (valor e tipo): false
console.log(5 != "5"); // Diferente (valor): false
console.log(5 !== "5"); // Diferente estrito (valor e tipo): true
console.log(10 > 5); // Maior que: true
console.log(10 < 5); // Menor que: false
console.log(10 >= 10); // Maior ou igual: true
console.log(10 <= 5); // Menor ou igual: false

// 4. Operadores Lógicos
console.log("\n=== Operadores Lógicos ===");
console.log(true && false); // AND (E lógico): false
console.log(true || false); // OR (OU lógico): true
console.log(!true); // NOT (NÃO lógico): false

// 5. Operadores de String
console.log("\n=== Operadores de String ===");
let saudacao = "Olá";
let nome = "Mundo";
console.log(saudacao + " " + nome); // Concatenação: "Olá Mundo"
saudacao += "!"; // Atribuição com concatenação: saudacao = "Olá!"
console.log(saudacao);

// 6. Operadores Ternários
console.log("\n=== Operadores Ternários ===");
let idade = 18;
let status = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(status); // "Adulto"

// 7. Operadores de Tipo
console.log("\n=== Operadores de Tipo ===");
console.log(typeof 42); // "number"
console.log(typeof "texto"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays são objetos em JS)
console.log(typeof null); // "object" (isso é um bug conhecido)
console.log(typeof undefined); // "undefined"

// 8. Operadores Bit a Bit
console.log("\n=== Operadores Bit a Bit ===");
console.log(5 & 1); // AND bit a bit: 1
console.log(5 | 1); // OR bit a bit: 5
console.log(5 ^ 1); // XOR bit a bit: 4
console.log(~5); // NOT bit a bit: -6
console.log(5 << 1); // Deslocamento à esquerda: 10
console.log(5 >> 1); // Deslocamento à direita: 2
console.log(-5 >>> 1); // Deslocamento à direita sem sinal: 2147483645

// 9. Operadores de Desestruturação
console.log("\n=== Operadores de Desestruturação ===");
const pessoa = { nome: "João", idade: 30 };
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa, idadePessoa); // "João" 30

const numeros = [1, 2, 3];
const [primeiro, segundo] = numeros;
console.log(primeiro, segundo); // 1 2

// 10. Operadores de Espalhamento e Rest
console.log("\n=== Operadores de Espalhamento e Rest ===");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const novoArray = [...array1, ...array2]; // Espalhamento
console.log(novoArray); // [1, 2, 3, 4, 5, 6]

function soma(...nums) { // Rest
    return nums.reduce((total, num) => total + num, 0);
}
console.log(soma(1, 2, 3, 4)); // 10

// 11. Operadores de Navegação e Chamada
console.log("\n=== Operadores de Navegação e Chamada ===");
const obj = { prop: "valor" };
console.log(obj.prop); // Acesso a propriedade: "valor"
console.log(obj['prop']); // Acesso dinâmico a propriedade: "valor"

function funcao() {
    return "Função chamada!";
}
console.log(funcao()); // Chamada de função: "Função chamada!"

console.log(obj?.prop); // Encadeamento opcional: "valor"

// 12. Operadores de Controle de Fluxo
console.log("\n=== Operadores de Controle de Fluxo ===");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

for (let i = 0; i < 3; i++) {
    console.log("Iteração:", i);
}

let contador = 0;
while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}

// 13. Operadores de Agrupamento
console.log("\n=== Operadores de Agrupamento ===");
console.log((2 + 3) * 4); // 20

// 14. Operadores de Deleção
console.log("\n=== Operadores de Deleção ===");
const objeto = { prop1: "valor1", prop2: "valor2" };
delete objeto.prop1; // Remove a propriedade prop1
console.log(objeto); // { prop2: "valor2" }

// 15. Operadores de Verificação de Existência
console.log("\n=== Operadores de Verificação de Existência ===");
console.log('prop2' in objeto); // true
console.log('prop1' in objeto); // false