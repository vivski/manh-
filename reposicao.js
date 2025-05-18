// QUESTÃO 1: Criação de Variáveis
// Crie três variáveis:
// Uma para armazenar seu nome.
// Outra para armazenar sua idade.
// Uma terceira que armazene o nome da sua cidade. Depois, exiba essas informações no console.

let nome = "Maria";
let idade = 25;
let cidade = "São Paulo";
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);

// QUESTÃO 2: Impressão na Tela
// Utilizando console.log, exiba a seguinte mensagem:
// "Bem-vindo ao mundo do JavaScript!"

console.log("Bem-vindo ao mundo do JavaScript!");

// QUESTÃO 3: Tipos Booleanos
// Crie duas variáveis booleanas:
// Uma chamada solBrilhando que seja true.
// Outra chamada estaChovendo que seja false. 
// Depois, imprima na tela a comparação do valor das duas variáveis.

let solBrilhando = true;
let estaChovendo = false;
console.log("Sol brilhando:", solBrilhando);
console.log("Está chovendo:", estaChovendo);
console.log("Está ensolarado e não está chovendo:", solBrilhando && !estaChovendo);

// QUESTÃO 4: Operadores Lógicos
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

// QUESTÃO 5: Operadores Relacionais
// Peça para o usuário inserir sua idade e verifique:
// Se ele tem mais de 18 anos, exiba "Você é maior de idade."
// Se ele tem menos ou igual a 18 anos, exiba "Você ainda é menor de idade."

let idadeUsuario = 17;
if (idadeUsuario > 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você ainda é menor de idade.");
}

// QUESTÃO 6: Estruturas de Decisão Simples
// Peça ao usuário para inserir uma temperatura e, com if, determine:
// Se a temperatura for maior que 30°C, exiba "Está muito quente!"
// Caso contrário, exiba "O clima está agradável."

let temperatura = 28;
if (temperatura > 30) {
  console.log("Está muito quente!");
} else {
  console.log("O clima está agradável.");
}

// QUESTÃO 7: Estruturas de Decisão Compostas
// Crie um sistema de avaliação escolar:
// O usuário deve inserir sua nota.
// Se for maior ou igual a 7, exiba "Aprovado!".
// Caso contrário, exiba "Reprovado! Estude mais para a próxima."

let nota = 6.5;
if (nota >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado! Estude mais para a próxima.");
}
