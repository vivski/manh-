// QUESTÃO 1: Criação de Variáveis (Texto Explicativo)
// Uma variável é um espaço na memória onde armazenamos valores. Em JavaScript, usamos palavras-chave como let, const ou var para criar variáveis.

// Crie três variáveis:
// Uma para armazenar seu nome.
// Outra para armazenar sua idade.
// Uma terceira que armazene seu curso. Depois, exiba essas informações no console.

let nome = "Ana";
let idade = 20;
let curso = "Sistemas de Informação";
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);

// QUESTÃO 2: Impressão de Texto no Console (Texto Explicativo)
// O console.log é uma função que permite exibir informações no console do navegador ou VS Code.
// Utilizando console.log, exiba a seguinte mensagem:
// "Seja bem-vindo ao mundo do JavaScript!"

console.log("Seja bem-vindo ao mundo do JavaScript!");

// QUESTÃO 3: Tipos Booleanos (Texto Explicativo)
// Boolean é um tipo de dado que só pode ter dois valores: true (verdadeiro) ou false (falso).
// Crie duas variáveis booleanas:
// Uma chamada solBrilhando que seja true.
// Outra chamada estaChovendo que seja false. 
// Depois, imprima na tela a comparação do valor das duas variáveis.

let solBrilhando = true;
let estaChovendo = false;
console.log("Está sol e não está chovendo:", solBrilhando && !estaChovendo);

// QUESTÃO 4: Operadores Lógicos (Texto Explicativo)
// Operadores lógicos permitem combinar condições:
// && (E) - Todas as condições devem ser verdadeiras.
// || (OU) - Apenas uma condição precisa ser verdadeira.
// ! (NÃO) - Inverte o valor booleano.

// Crie um código que verifique as seguintes condições:
// Se está ensolarado E não está chovendo, exiba "Dia perfeito para um passeio!"
// Se está chovendo OU muito frio, exiba "Melhor ficar em casa!" 

let estaEnsolarado = true;
let muitoFrio = false;
if (estaEnsolarado && !estaChovendo) {
  console.log("Dia perfeito para um passeio!");
} else if (estaChovendo || muitoFrio) {
  console.log("Melhor ficar em casa!");
}

// QUESTÃO 5: Operadores Relacionais (Texto Explicativo)
// Operadores relacionais são usados para comparar valores:
// > maior que, < menor que, >= maior ou igual, <= menor ou igual, === igual a, !== diferente de.

// Peça para o usuário inserir sua idade e verifique:
// Se ele tem mais de 18 anos, exiba "Você é maior de idade."
// Se ele tem menos ou igual a 18 anos, exiba "Você ainda é menor de idade."

let idadeUsuario = 17;
if (idadeUsuario > 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você ainda é menor de idade.");
}

// QUESTÃO 6: Estruturas de Decisão Simples (Texto Explicativo)
// Uma estrutura de decisão (if) permite que o código tome diferentes caminhos com base em uma condição.

// Peça ao usuário para inserir uma temperatura e, com if, determine:
// Se a temperatura for maior que 30°C, exiba "Está muito quente!"
// Caso contrário, exiba "O clima está agradável."

let temperatura = 28;
if (temperatura > 30) {
  console.log("Está muito quente!");
} else {
  console.log("O clima está agradável.");
}

// QUESTÃO 7: Estruturas de Decisão Compostas (Texto Explicativo)
// Estruturas compostas (if...else) permitem lidar com mais de uma condição.
// Crie um sistema de avaliação escolar:
// O usuário deve inserir sua nota. Se for maior ou igual a 7, exiba "Aprovado!".
// Caso contrário, exiba "Reprovado! Estude mais para a próxima."

let nota = 6.5;
if (nota >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado! Estude mais para a próxima.");
}

// QUESTÃO 8: Uso do Prompt e Parse (Texto Explicativo)
// Prompt é uma forma de capturar entrada do usuário (no navegador).
// ParseInt e ParseFloat convertem texto para números inteiros ou decimais.

// Peça ao usuário para inserir um número e exiba o dobro desse número.

let numero = parseFloat(prompt("Digite um número:"));
console.log("O dobro do seu número é:", numero * 2);

// QUESTÃO 9: Operador Ternário (Texto Explicativo)
// Um operador ternário é uma forma simplificada de escrever uma condição.
// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso

// Verifique se um aluno passou:
// Se a nota for maior ou igual a 5, exiba "Aprovado!".
// Caso contrário, exiba "Reprovado!".

let notaAluno = 4.5;
let resultado = notaAluno >= 5 ? "Aprovado!" : "Reprovado!";
console.log(resultado);

// QUESTÃO 10: Verificação de Email (Texto Explicativo)
// O método includes() verifica se uma string contém uma outra string.
// endsWith() verifica se a string termina com determinado texto.

// Peça ao usuário que insira seu email e verifique:
// Se contém "@" e termina com ".com", exiba "Email válido."
// Caso contrário, exiba "Email inválido."

let email = "exemplo@dominio.com";
if (email.includes("@") && email.endsWith(".com")) {
  console.log("Email válido.");
} else {
  console.log("Email inválido.");
}
