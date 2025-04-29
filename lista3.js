// INTRODUÇÃO A JAVASCRIPT PARA INICIANTES
// MODO DIDÁTICO E GRADUAL (EXPLICAÇÕES INCLUSAS)
// OBS: Esse arquivo deve ser usado no VS Code ou outro editor que aceite JavaScript

// QUESTÃO 1
// Crie uma variável que receba uma string
let nome = "Maria"; // Criamos a variável nome e atribuimos uma string
console.log("O nome é:", nome); // Saída: O nome é: Maria

// QUESTÃO 2
// Crie duas variáveis numéricas e imprima a soma
let numero1 = 5;
let numero2 = 3;
let soma = numero1 + numero2;
console.log("A soma é:", soma); // Saída: A soma é: 8

// QUESTÃO 3
// Concatene duas strings
let saudacao = "Olá, ";
let pessoa = "João";
let frase = saudacao + pessoa;
console.log(frase); // Saída: Olá, João

// QUESTÃO 4
// Verifique o tipo de uma variável usando typeof
let idade = 25;
console.log(typeof idade); // Saída: number

// QUESTÃO 5
// Use uma variável booleana para controle
let estaLogado = true;
if (estaLogado) {
  console.log("Usuário está logado"); // Saída: Usuário está logado
} else {
  console.log("Usuário não está logado");
}

// QUESTÃO 6
// Crie um array de frutas e acesse um item
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[1]); // Saída: banana

// QUESTÃO 7
// Adicione um item ao array
frutas.push("uva");
console.log(frutas); // Saída: ["maçã", "banana", "laranja", "uva"]

// QUESTÃO 8
// Use um loop for clássico para imprimir os itens do array
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}

// QUESTÃO 9
// Crie uma função que recebe um nome e imprime uma saudação
function saudacaoPersonalizada(nome) {
  console.log("Olá, " + nome + "! Seja bem-vindo(a).");
}
saudacaoPersonalizada("Lucas"); // Saída: Olá, Lucas! Seja bem-vindo(a).

// QUESTÃO 10
// Simule uma entrada com prompt (caso use navegador)
// let nomeUsuario = prompt("Digite seu nome:");
// console.log("Olá, " + nomeUsuario);
// OBS: Prompt só funciona no navegador, não no Node.js


// CONTINUAÇÃO COM QUESTÕES MAIS AVANÇADAS E CRIATIVAS

// QUESTÃO 11
// Crie uma função que recebe dois números e retorna a média
function calcularMedia(a, b) {
  let media = (a + b) / 2;
  return media;
}
console.log("Média:", calcularMedia(7, 9)); // Saída: Média: 8

// QUESTÃO 12
// Função que valida idade mínima (por exemplo, 18 anos)
function validarIdade(idade) {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}
validarIdade(15); // Saída: Menor de idade

// QUESTÃO 13
// Validação de e-mail (simples)
function validarEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    console.log("E-mail válido");
  } else {
    console.log("E-mail inválido");
  }
}
validarEmail("teste@gmail.com"); // Saída: E-mail válido

// QUESTÃO 14
// Crie um array com 5 nomes e diga qual é o maior nome
let nomes = ["Ana", "Fernanda", "João", "Carlos", "Beatriz"];
let maiorNome = "";
for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].length > maiorNome.length) {
    maiorNome = nomes[i];
  }
}
console.log("Maior nome:", maiorNome); // Saída: Fernanda

// QUESTÃO 15
// Crie uma função que recebe uma senha e verifica se tem pelo menos 8 caracteres
function validarSenha(senha) {
  if (senha.length >= 8) {
    console.log("Senha segura");
  } else {
    console.log("Senha fraca");
  }
}
validarSenha("12345678"); // Saída: Senha segura

// QUESTÃO 16
// Crie um array com idades e calcule a média
let idades = [18, 20, 22, 19, 21];
let total = 0;
for (let i = 0; i < idades.length; i++) {
  total += idades[i];
}
let mediaIdades = total / idades.length;
console.log("Média de idades:", mediaIdades); // Saída: 20

// QUESTÃO 17
// Escreva uma função que retorna se um número é par ou ímpar
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log("Par");
  } else {
    console.log("Ímpar");
  }
}
parOuImpar(7); // Saída: Ímpar

// QUESTÃO 18
// Use for para imprimir de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// QUESTÃO 19
// Crie uma função que soma todos os números de um array
function somarArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}
console.log(somarArray([1, 2, 3, 4])); // Saída: 10

// QUESTÃO 20
// Crie um sistema que simula um cadastro com nome e idade
let cadastro = [];
function adicionarPessoa(nome, idade) {
  cadastro.push({ nome: nome, idade: idade });
}
adicionarPessoa("Maria", 25);
adicionarPessoa("João", 30);
console.log(cadastro);

// CONTINUA...

// As próximas 30 questões virão em sequência evoluindo as ideias acima.
