// Questão 1: Crie um array com 3 frutas e imprima cada uma
const frutas = ["maçã", "banana", "pera"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Questão 2: Verifique se "banana" está no array usando .includes()
console.log(frutas.includes("banana")); // true

// Questão 3: Adicione "uva" ao final do array
frutas.push("uva");
console.log(frutas); // ["maçã", "banana", "pera", "uva"]

// Questão 4: Remova o primeiro item do array
frutas.shift();
console.log(frutas); // ["banana", "pera", "uva"]

// Questão 5: Crie duas listas e imprima todos os itens de ambas
const listaA = ["maçã", "banana"];
const listaB = ["banana", "pera"];
console.log(listaA);
console.log(listaB);

// Questão 6: Use um laço para verificar se cada item de A está em B
for (let i = 0; i < listaA.length; i++) {
  if (listaB.includes(listaA[i])) {
    console.log(`${listaA[i]} está em ambas as listas`);
  }
}

// Questão 7: Armazene os elementos comuns entre duas listas
let comuns = [];
for (let i = 0; i < listaA.length; i++) {
  if (listaB.includes(listaA[i])) {
    comuns.push(listaA[i]);
  }
}
console.log("Comuns:", comuns); // ["banana"]

// Questão 8: Conte quantos elementos estão em comum
console.log("Quantidade de comuns:", comuns.length);

// Questão 9: Crie uma função que retorna os elementos comuns entre duas listas
function intersecao(lista1, lista2) {
  let resultado = [];
  for (let i = 0; i < lista1.length; i++) {
    if (lista2.includes(lista1[i]) && !resultado.includes(lista1[i])) {
      resultado.push(lista1[i]);
    }
  }
  return resultado;
}
console.log(intersecao(["maçã", "pera"], ["pera", "uva"])); // ["pera"]

// Questão 10: Use template string para imprimir "1 banana incomoda muita gente"
console.log(`1 banana incomoda muita gente`);
