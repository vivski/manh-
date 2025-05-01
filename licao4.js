// -------------------------------------------
// FUNDAMENTOS DE JAVASCRIPT - PARTE 1
// -------------------------------------------
// Questões básicas e introdutórias para iniciantes
// Objetivo: ensinar o aluno com dificuldade de aprendizagem
// como declarar, manipular, armazenar e exibir dados.
// -------------------------------------------

// Questão 1: Crie uma variável chamada nome e atribua uma string a ela
let nome = "João";
console.log(nome); // Exibe: João

// Questão 2: Crie uma variável chamada idade e atribua um número
let idade = 25;
console.log(idade); // Exibe: 25

// Questão 3: Crie uma variável chamada cidade e atribua a ela o nome de uma cidade
let cidade = "Recife";
console.log(cidade); // Exibe: Recife

// Questão 4: Imprima no console a frase "Meu nome é João, tenho 25 anos e moro em Recife"
// Usando concatenação:
console.log("Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade);

// Questão 5: Modifique o valor de nome para "Maria" e imprima novamente
nome = "Maria";
console.log("Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade);

// Questão 6: Crie uma variável booleana chamada isAluno e atribua true
let isAluno = true;
console.log(isAluno); // Exibe: true

// Questão 7: Crie uma variável que seja nula (sem valor)
let endereco = null;
console.log(endereco); // Exibe: null

// Questão 8: Declare uma variável sem valor (undefined)
let telefone;
console.log(telefone); // Exibe: undefined

// Questão 9: Some dois números e imprima o resultado
let a = 10;
let b = 20;
let resultado = a + b;
console.log("A soma é: " + resultado); // Exibe: A soma é: 30

// Questão 10: Crie uma variável que seja o resultado da multiplicação de dois números
let produto = 4 * 5;
console.log("O produto é: " + produto); // Exibe: O produto é: 20

// Questão 11: Use template string (``) para exibir a frase
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`);

// Questão 12: Crie uma variável array com 3 frutas e imprima
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas); // Exibe: [ 'maçã', 'banana', 'laranja' ]

// Questão 13: Imprima separadamente cada fruta do array
console.log(frutas[0]); // maçã
console.log(frutas[1]); // banana
console.log(frutas[2]); // laranja

// Questão 14: Adicione uma fruta ao final do array
frutas.push("abacaxi");
console.log(frutas); // Exibe: [ 'maçã', 'banana', 'laranja', 'abacaxi' ]

// Questão 15: Remova a primeira fruta do array
frutas.shift();
console.log(frutas); // Exibe: [ 'banana', 'laranja', 'abacaxi' ]

// Questão 16: Crie um loop que imprime todos os itens do array
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Questão 17: Crie um array com números e imprima a soma deles
let numeros = [10, 20, 30];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("A soma é: " + soma); // 60

// Questão 18: Crie um objeto com nome, idade e cidade
let pessoa = {
  nome: "Carlos",
  idade: 40,
  cidade: "Natal"
};
console.log(pessoa);

// Questão 19: Acesse e imprima o nome da pessoa
console.log(pessoa.nome); // Carlos

// Questão 20: Crie uma função que diga "Olá, [nome]!"
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}
saudacao("Ana"); // Olá, Ana!

// Questão 21: Crie uma função que receba dois números e retorne a soma
function somar(x, y) {
  return x + y;
}
console.log(somar(5, 10)); // 15

// Questão 22: Crie uma função que receba um número e retorne se é par ou ímpar
function parOuImpar(num) {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
console.log(parOuImpar(7)); // Ímpar

// Questão 23: Crie uma função que calcule a média de um array de notas
function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}
let notasAluno = [8, 7.5, 9];
console.log(calcularMedia(notasAluno)); // 8.166...

// Questão 24: Crie um array de nomes e imprima quantos nomes têm
let nomes = ["Ana", "Lucas", "Pedro"];
console.log("Total de nomes: " + nomes.length);

// Questão 25: Crie uma função que receba um nome e adicione no array
function adicionarNome(novoNome) {
  nomes.push(novoNome);
}
adicionarNome("Clara");
console.log(nomes);

// Questão 26: Crie uma variável que contenha a frase "Olá, mundo!" e imprima
let saudacaoMundo = "Olá, mundo!";
console.log(saudacaoMundo);

// Questão 27: Crie um array com 5 números e retorne o maior valor
let numerosTeste = [4, 8, 15, 2, 9];
let maior = numerosTeste[0];
for (let i = 1; i < numerosTeste.length; i++) {
  if (numerosTeste[i] > maior) {
    maior = numerosTeste[i];
  }
}
console.log("Maior número: " + maior);

// Questão 28: Crie uma função que receba um nome e idade e imprima uma frase
function dadosUsuario(nome, idade) {
  console.log(`${nome} tem ${idade} anos.`);
}
dadosUsuario("João", 32);

// Questão 29: Crie uma variável que receba um número e converta para string
let numero = 123;
let numeroString = numero.toString();
console.log(typeof numeroString); // string

// Questão 30: Crie um programa que pergunte a idade (via prompt) e diga se pode votar
// (Este só funciona em navegadores com prompt)
// let idade = prompt("Digite sua idade:");
// if (idade >= 16) {
//   console.log("Pode votar.");
// } else {
//   console.log("Não pode votar.");
// }

// Questão 31: Crie um array de produtos e imprima todos
let produtos = ["notebook", "teclado", "monitor"];
for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i]);
}

// Questão 32: Adicione "mouse" no início do array
produtos.unshift("mouse");
console.log(produtos);

// Questão 33: Crie uma função que receba um array de nomes e imprima um por um
function imprimirNomes(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
imprimirNomes(["Lucas", "Joana", "Pedro"]);

// Questão 34: Crie um contador de 1 a 5 usando for
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Questão 35: Crie uma função que receba um número e diga se é maior que 10
function maiorQueDez(num) {
  if (num > 10) {
    return "Maior que 10";
  } else {
    return "10 ou menor";
  }
}
console.log(maiorQueDez(7)); // 10 ou menor

// Questão 36: Crie um array com as letras de seu nome
let letras = ["V", "i", "v", "i", "a", "n"];
console.log(letras.join("")); // Vivian

// Questão 37: Inverta a ordem das letras
letras.reverse();
console.log(letras);

// Questão 38: Crie um array com anos de nascimento e imprima quem é maior de idade (2025)
let anos = [2010, 2000, 1995];
for (let i = 0; i < anos.length; i++) {
  let idade = 2025 - anos[i];
  if (idade >= 18) {
    console.log(`Pessoa ${i + 1} é maior de idade com ${idade} anos.`);
  }
}

// Questão 39: Crie uma função que receba um email e verifique se contém "@"
function validarEmail(email) {
  return email.includes("@");
}
console.log(validarEmail("teste@gmail.com")); // true

// Questão 40: Crie uma função que simule uma calculadora simples
function calculadora(a, b, operacao) {
  if (operacao === "+") return a + b;
  if (operacao === "-") return a - b;
  if (operacao === "*") return a * b;
  if (operacao === "/") return a / b;
  return "Operação inválida";
}
console.log(calculadora(10, 5, "+")); // 15

// Questão 41: Crie uma função que retorne o menor número de um array
function menorNumero(arr) {
  let menor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
    }
  }
  return menor;
}
console.log(menorNumero([4, 8, 1, 9])); // 1

// Questão 42: Crie um programa que diga se um número está entre 10 e 20
function entre10e20(n) {
  return n >= 10 && n <= 20;
}
console.log(entre10e20(15)); // true

// Questão 43: Crie um array vazio e adicione 3 nomes dinamicamente
let nomes2 = [];
nomes2.push("Lara");
nomes2.push("Tiago");
nomes2.push("Gustavo");
console.log(nomes2);

// Questão 44: Crie uma função que multiplica cada número de um array por 2
function dobrarNumeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
}
console.log(dobrarNumeros([1, 2, 3])); // [2, 4, 6]

// Questão 45: Crie uma função que recebe uma palavra e conta as letras
function contarLetras(palavra) {
  return palavra.length;
}
console.log(contarLetras("javascript")); // 10

// Questão 46: Crie um array de objetos com nome e idade, e imprima os nomes
let pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 22 }
];
for (let i = 0; i < pessoas.length; i++) {
  console.log(pessoas[i].nome);
}

// Questão 47: Crie uma função que receba um nome e retorne quantas letras tem
function letrasNome(nome) {
  return nome.length;
}
console.log(letrasNome("Lucas")); // 5

// Questão 48: Crie uma função que diga se a idade é maior de idade
function verificarMaioridade(idade) {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}
console.log(verificarMaioridade(16));

// Questão 49: Crie uma função que some todos os múltiplos de 3 até 30
function somarMultiplosDe3() {
  let soma = 0;
  for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0) {
      soma += i;
    }
  }
  return soma;
}
console.log(somarMultiplosDe3()); // 165

// Questão 50: Crie uma função que receba um array de notas e diga quantas são acima de 7
function contarNotasBoas(notas) {
  let boas = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 7) {
      boas++;
    }
  }
  return boas;
}
console.log(contarNotasBoas([6, 8, 9, 5, 10])); // 3
