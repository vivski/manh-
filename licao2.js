// ======================================================
// CURSO DIDÁTICO DE JAVASCRIPT PARA INICIANTES ABSOLUTOS
// Autor: ChatGPT para Vivian e seu aluno :)
// Total: 100 Questões explicadas em ordem crescente de dificuldade
// Estilo: Comentários detalhados, entradas fixas e do usuário, analogias, explicações passo a passo
// ======================================================

// ========================
// CAPÍTULO 1: VARIÁVEIS, TIPOS E CONSOLE.LOG
// ========================

// Questão 1
/*
Crie uma variável chamada nome e atribua a ela seu nome completo.
Imprima esse nome no console.
*/
let nome = "Vivian";
console.log(nome); // Saída: Vivian
// Explicação: usamos let para criar uma variável, e console.log para mostrar na tela.

// Questão 2
/*
Crie duas variáveis, nome e sobrenome. Em seguida, crie uma terceira chamada nomeCompleto, que junte as duas com espaço.
*/
let primeiroNome = "Ana";
let sobrenome = "Souza";
let nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto); // Saída: Ana Souza
// Explicação: usamos + para concatenar strings.

// Questão 3
/*
Crie uma variável idade e imprima uma frase como: "Ana Souza tem 25 anos"
*/
let idade = 25;
console.log(nomeCompleto + " tem " + idade + " anos");

// Questão 4
/*
Declare três variáveis: produto, preco e quantidade. Imprima o valor total da compra.
*/
let produto = "Lápis";
let preco = 1.5;
let quantidade = 10;
let total = preco * quantidade;
console.log("Total da compra de " + produto + ": R$" + total);

// Questão 5
/*
Mostre como fazer a entrada de dados com prompt.
Peça ao usuário para digitar um número, dobre esse número e mostre o resultado.
*/
// let numero = prompt("Digite um número:");
// let dobro = numero * 2;
// console.log("O dobro é: " + dobro);
// (Descomente se quiser rodar no navegador com prompt)

// Questão 6
/*
Mostre o uso de typeof para identificar o tipo de dado de cada variável.
*/
console.log(typeof nome);       // string
console.log(typeof idade);      // number
console.log(typeof total);      // number

// Questão 7
/*
Crie uma variável booleana que indica se um aluno foi aprovado (true ou false).
*/
let aprovado = true;
console.log("Aluno aprovado?", aprovado); // true

// Questão 8
/*
Transforme uma string em número usando parseInt.
*/
let entrada = "50";
let numeroConvertido = parseInt(entrada);
console.log(numeroConvertido + 10); // 60

// Questão 9
/*
Mostre como usar template literals com crase para facilitar concatenação.
*/
let cidade = "Maceió";
console.log(`Olá, meu nome é ${nome} e eu moro em ${cidade}.`);

// Questão 10
/*
Crie uma mensagem que utilize tudo junto:
- nome
- idade
- cidade
*/
console.log(`${nome} tem ${idade} anos e mora em ${cidade}.`);


// ========================
// (CONTINUAREMOS COM OUTROS BLOCOS AQUI...)
// ========================

// Os próximos blocos incluirão:
// - Arrays
// - Loops (for, while)
// - Funções
// - Objetos
// - Validações simples (email, senha)
// - Mini desafios divertidos e educativos

// Aviso: este arquivo ainda será expandido com mais 90 questões :)