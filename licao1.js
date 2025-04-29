// ===================================================
// INTRODUÇÃO: APRENDENDO JAVASCRIPT DO ZERO
// ===================================================

// O que é uma variável?
// Variável é um espaço na memória do computador que guarda um valor (como texto, número, etc).

// Como declarar uma variável em JavaScript?
// Usamos as palavras "let", "const" ou "var".

// Exemplo:
const nome = "Ana"; // criamos uma variável chamada nome e guardamos o texto "Ana"

// Como testar no VS Code?
// Basta escrever "console.log()" para mostrar o resultado no terminal do VS Code.

console.log(nome); // saída: Ana

// ---------------------------------------------------

// Tipos de dados principais:
// - String  -> textos. Ex: "Olá", "Ana", "123"
// - Number  -> números. Ex: 10, 5.5, -7
// - Boolean -> verdadeiro ou falso. Ex: true, false

// Agora vamos praticar com perguntas!

// ===================================================
// QUESTÕES E RESOLUÇÕES
// ===================================================

// -------------------------
// 1. Crie uma variável que armazena o texto "Oi!"
const saudacao = "Oi!";
console.log(saudacao); // saída: Oi!

// -------------------------
// 2. Crie uma variável que armazena o número 2024
const ano = 2024;
console.log(ano); // saída: 2024

// -------------------------
// 3. Crie uma variável que armazena o valor verdadeiro (true)
const estaAprovado = true;
console.log(estaAprovado); // saída: true

// -------------------------
// 4. Imprima no console: "Meu nome é João"
const meuNome = "João";
console.log("Meu nome é " + meuNome); // saída: Meu nome é João

// -------------------------
// 5. Some dois números e imprima o resultado
const num1 = 10;
const num2 = 5;
console.log(num1 + num2); // saída: 15

// -------------------------
// 6. Concatene duas strings: "Bom" e "dia"
const palavra1 = "Bom";
const palavra2 = "dia";
console.log(palavra1 + " " + palavra2); // saída: Bom dia

// -------------------------
// 7. Crie uma variável que guarda sua idade e imprima
const idade = 25;
console.log("Minha idade é: " + idade); // saída: Minha idade é: 25

// -------------------------
// 8. Crie três variáveis: nome, sobrenome e idade, e imprima uma frase usando elas
const primeiroNome = "Maria";
const sobrenome = "Silva";
const idadeMaria = 30;
console.log("Olá, meu nome é " + primeiroNome + " " + sobrenome + " e tenho " + idadeMaria + " anos.");

// -------------------------
// 9. Receba um valor fixo (ex: 50) e subtraia 10, imprimindo o resultado
const valor = 50;
console.log(valor - 10); // saída: 40

// -------------------------
// 10. Multiplique dois valores (ex: 7 * 8)
const a = 7;
const b = 8;
console.log(a * b); // saída: 56

// -------------------------
// 11. Divida dois números (ex: 100 / 5)
const dividendo = 100;
const divisor = 5;
console.log(dividendo / divisor); // saída: 20

// -------------------------
// 12. Crie um array (lista) com 3 nomes
const listaNomes = ["Ana", "Bruno", "Carlos"];
console.log(listaNomes); // saída: ["Ana", "Bruno", "Carlos"]

// -------------------------
// 13. Imprima o primeiro elemento do array
console.log(listaNomes[0]); // saída: Ana

// -------------------------
// 14. Imprima o último elemento do array
console.log(listaNomes[2]); // saída: Carlos

// -------------------------
// 15. Adicione um novo nome ao array usando .push()
listaNomes.push("Daniela");
console.log(listaNomes); // saída: ["Ana", "Bruno", "Carlos", "Daniela"]

// -------------------------
// 16. Crie uma função que imprime "Olá, mundo!"
function saudacaoMundo() {
    console.log("Olá, mundo!");
}
saudacaoMundo(); // chamada da função

// -------------------------
// 17. Crie uma função que recebe um nome como parâmetro e imprime "Olá, NOME"
function cumprimentar(nome) {
    console.log("Olá, " + nome);
}
cumprimentar("Lucas"); // saída: Olá, Lucas

// -------------------------
// 18. Crie uma função que soma dois números
function somar(x, y) {
    console.log(x + y);
}
somar(5, 3); // saída: 8

// -------------------------
// 19. Crie uma função que retorna o dobro de um número
function dobrar(numero) {
    return numero * 2;
}
console.log(dobrar(6)); // saída: 12

// -------------------------
// 20. Usando for, imprima todos os nomes da lista
for (let i = 0; i < listaNomes.length; i++) {
    console.log(listaNomes[i]);
}

// -------------------------
// 21. Crie uma variável para armazenar o resultado da soma de 1 + 2 + 3
const soma123 = 1 + 2 + 3;
console.log(soma123); // saída: 6

// -------------------------
// 22. Crie um array com 5 números e imprima cada um
const numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// -------------------------
// 23. Calcule a média dos números do array
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
let media = soma / numeros.length;
console.log("Média: " + media);

// -------------------------
// 24. Crie uma função que receba um array de números e retorne o maior número
function maiorNumero(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}
console.log(maiorNumero([10, 25, 18, 40, 7])); // saída: 40

// -------------------------
// 25. Faça uma função que diga se um número é par ou ímpar
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}
parOuImpar(7); // saída: Ímpar

// -------------------------
// 26. Crie uma variável para armazenar o resultado da multiplicação de 3 números
const mult = 2 * 3 * 5;
console.log(mult); // saída: 30

// -------------------------
// 27. Crie um array vazio e adicione elementos depois
const frutas = [];
frutas.push("Maçã");
frutas.push("Banana");
frutas.push("Laranja");
console.log(frutas);

// -------------------------
// 28. Imprima quantos elementos tem no array frutas
console.log(frutas.length); // saída: 3

// -------------------------
// 29. Imprima a frase: "A primeira fruta é Maçã"
console.log("A primeira fruta é " + frutas[0]);

// -------------------------
// 30. Remova o último elemento do array usando .pop()
frutas.pop();
console.log(frutas);

// -------------------------
// 31. Verifique se um número é positivo ou negativo
function verificarNumero(n) {
    if (n > 0) {
        console.log("Positivo");
    } else if (n < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}
verificarNumero(-5); // saída: Negativo

// -------------------------
// 32. Crie um array de cidades e imprima cada cidade
const cidades = ["Maceió", "São Paulo", "Salvador"];
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}

// -------------------------
// 33. Crie uma função que diga se uma palavra é "Ana" ou não
function verificarNome(nome) {
    if (nome === "Ana") {
        console.log("É Ana");
    } else {
        console.log("Não é Ana");
    }
}
verificarNome("Beatriz"); // saída: Não é Ana

// -------------------------
// 34. Receba um número e retorne seu quadrado
function quadrado(n) {
    return n * n;
}
console.log(quadrado(4)); // saída: 16

// -------------------------
// 35. Crie uma função que junte dois arrays
function juntarArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(juntarArrays([1, 2], [3, 4])); // saída: [1, 2, 3, 4]

// -------------------------
// 36. Faça uma função que multiplica todos os números de um array por 2
function dobrarArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
console.log(dobrarArray([1, 2, 3]));

// -------------------------
// 37. Verifique se uma string contém a letra "a"
function contemLetraA(texto) {
    return texto.includes("a");
}
console.log(contemLetraA("Sol")); // saída: false

// -------------------------
// 38. Faça uma função que some todos os elementos de um array
function somaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}
console.log(somaArray([5, 5, 5]));

// -------------------------
// 39. Crie uma função que retorna a quantidade de letras de uma palavra
function contarLetras(palavra) {
    return palavra.length;
}
console.log(contarLetras("Programação"));

// -------------------------
// 40. Crie um programa que leia 2 notas e calcule a média
const nota1 = 8;
const nota2 = 6;
const mediaNotas = (nota1 + nota2) / 2;
console.log("Média: " + mediaNotas);

// -------------------------
// 41. Crie uma função que diga se a média é maior ou igual a 7
function aprovadoOuNao(media) {
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}
aprovadoOuNao(6);

// -------------------------
// 42. Faça uma função que transforme metros em centímetros
function metrosParaCentimetros(m) {
    return m * 100;
}
console.log(metrosParaCentimetros(2)); // saída: 200

// -------------------------
// 43. Faça uma função que diga se uma idade é maior de idade
function maiorDeIdade(idade) {
    return idade >= 18;
}
console.log(maiorDeIdade(17)); // saída: false

// -------------------------
// 44. Crie um array de números de 1 a 5 e imprima apenas os pares
const listaNumeros = [1, 2, 3, 4, 5];
for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 === 0) {
        console.log(listaNumeros[i]);
    }
}

// -------------------------
// 45. Crie uma função que recebe dois números e retorna o maior
function maior(x, y) {
    return x > y ? x : y;
}
console.log(maior(5, 9));

// -------------------------
// 46. Crie uma função que receba um array e imprima seus elementos invertidos
function inverterArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
inverterArray(["A", "B", "C"]);

// -------------------------
// 47. Crie um programa que conte de 0 a 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// -------------------------
// 48. Crie uma função que imprima "Bom dia", "Boa tarde" ou "Boa noite" dependendo da hora
function saudacaoHora(hora) {
    if (hora < 12) {
        console.log("Bom dia");
    } else if (hora < 18) {
        console.log("Boa tarde");
    } else {
        console.log("Boa noite");
    }
}
saudacaoHora(15);

// -------------------------
// 49. Crie uma função que multiplica um número por ele mesmo
function multiplicarPorEleMesmo(n) {
    return n * n;
}
console.log(multiplicarPorEleMesmo(9));

// -------------------------
// 50. Crie um programa que peça 3 notas e diga se passou (média >= 7)
const n1 = 7;
const n2 = 8;
const n3 = 6;
const mediaFinal = (n1 + n2 + n3) / 3;
aprovadoOuNao(mediaFinal); // usando a função que já criamos!

// ===================================================
// FIM DO MATERIAL
// ===================================================
