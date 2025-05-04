function acharItensComuns(listaA,listaB){
    const itensComuns = []
    for(let i = 0; i< listaA.length; i++){
        if(listaB.includes(listaA[i])){
            itensComuns.push(listaA[i])
            const numero = itensComuns.length
            if(numero === 1){
                console.log(` ${numero} ${listaA[i]} incomoda muita gente `)
            }            
            if (numero === 2) {
                console.log(` ${numero} ${listaA[i]} incomodam, incomodam muito mais`)                
              }
            else {
                console.log(` ${numero} ${listaA[i]} incomodam, incomodam muita gente`)
                
            }
            
        }
    }
}

console.log(acharItensComuns(["maçã","banana","kiwi","pera"],["uva","banana","pera","melancia"]))

///

// Questão 1: Declare uma variável com seu nome e imprima
let nome = "Vivian";
console.log("Meu nome é " + nome);

// Questão 2: Declare duas variáveis numéricas e imprima a soma
let a = 5;
let b = 10;
console.log("A soma é:", a + b);

// Questão 3: Crie um array com 3 cores e imprima a primeira
let cores = ["vermelho", "azul", "verde"];
console.log(cores[0]);

// Questão 4: Adicione uma cor ao final do array
cores.push("amarelo");
console.log(cores);

// Questão 5: Remova a primeira cor e imprima o array
cores.shift();
console.log(cores);

// Questão 6: Verifique se "verde" está no array
console.log(cores.includes("verde")); // true ou false

// Questão 7: Crie um array de 5 números e imprima cada número com for
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Questão 8: Crie uma função que receba um nome e diga "Oi, nome!"
function cumprimentar(nome) {
  console.log("Oi, " + nome + "!");
}
cumprimentar("Carlos");

// Questão 9: Crie uma função que receba dois números e retorne o maior
function maior(x, y) {
  return x > y ? x : y;
}
console.log("Maior número:", maior(10, 20));

// Questão 10: Crie uma função que receba um array e imprima só os pares
function imprimirPares(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
imprimirPares([1, 2, 3, 4, 5, 6]);

// Questão 11: Crie um array com 3 frutas e imprima a segunda fruta
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[1]);

// Questão 12: Verifique se "morango" está no array
console.log(frutas.includes("morango")); // false

// Questão 13: Remova a última fruta e imprima o array
frutas.pop();
console.log(frutas);

// Questão 14: Adicione "abacaxi" no início do array
frutas.unshift("abacaxi");
console.log(frutas);

// Questão 15: Faça uma função que imprima todos os elementos com índice
function mostrarComIndice(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i]);
  }
}
mostrarComIndice(frutas);

// Questão 16: Crie uma função que filtre só os nomes com mais de 5 letras
function nomesGrandes(nomes) {
    for (let i = 0; i < nomes.length; i++) {
      if (nomes[i].length > 5) {
        console.log(nomes[i]);
      }
    }
  }
  nomesGrandes(["Ana", "Beatriz", "Carlos", "Lu"]);
  
  // Questão 17: Faça uma função que conte quantos pares há em um array
  function contarPares(arr) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        contador++;
      }
    }
    console.log("Quantidade de pares:", contador);
  }
  contarPares([2, 5, 7, 8, 10]);
  
  // Questão 18: Crie uma função que receba duas listas e retorne os comuns
  function itensComuns(a, b) {
    const comuns = [];
    for (let i = 0; i < a.length; i++) {
      if (b.includes(a[i]) && !comuns.includes(a[i])) {
        comuns.push(a[i]);
      }
    }
    return comuns;
  }
  console.log(itensComuns(["maçã", "banana"], ["banana", "pera"]));
  
  // Questão 19: Use a função acima para imprimir cada comum com seu índice
  function mostrarComuns(listA, listB) {
    const comuns = itensComuns(listA, listB);
    for (let i = 0; i < comuns.length; i++) {
      console.log(`${i + 1}. ${comuns[i]}`);
    }
  }
  mostrarComuns(["kiwi", "banana", "pera"], ["uva", "banana", "pera"]);

// Questão 20: A interseção que incomoda (versão final)

function acharItensComuns(listaA, listaB) {
    const itensComuns = [];
  
    for (let i = 0; i < listaA.length; i++) {
      const item = listaA[i];
      if (listaB.includes(item) && !itensComuns.includes(item)) {
        itensComuns.push(item);
        const numero = itensComuns.length;
  
        if (numero === 1) {
          console.log(`${numero} ${item} incomoda muita gente`);
        } else if (numero === 2) {
          console.log(`${numero} ${item} incomodam, incomodam muito mais`);
        } else {
          console.log(`${numero} ${item} incomodam, incomodam muita gente`);
        }
      }
    }
  }
  
  acharItensComuns(
    ["maçã", "banana", "kiwi", "pera"],
    ["uva", "banana", "pera", "melancia"]
  );

  // validar emails 
  function validarEmails(listaEmails) {
    const emailsValidos = [];
  
    for (let i = 0; i < listaEmails.length; i++) {
      const email = listaEmails[i];
      if (email.endsWith("@aluno.ifa.edu.br")) {
        emailsValidos.push(email);
        console.log(`✅ Email válido: ${email}`);
      } else {
        console.log(`❌ Email inválido: ${email}`);
      }
    }
  
    return emailsValidos;
  }
  
  // Exemplo de uso
  const emailsTeste = [
    "maria@aluno.ifa.edu.br",
    "joao@gmail.com",
    "ana@aluno.ifa.edu.br",
    "bruno@yahoo.com"
  ];
  
  const resultado = validarEmails(emailsTeste);
  console.log("Lista final de emails aceitos:", resultado);
  