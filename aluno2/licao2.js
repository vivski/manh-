// Questão 11: Imprima frases com base nos elementos da interseção
const frutasA = ["maçã", "banana", "pera", "kiwi"];
const frutasB = ["uva", "banana", "pera", "melancia"];

const comuns2 = intersecao(frutasA, frutasB); // ["banana", "pera"]

for (let i = 0; i < comuns2.length; i++) {
  const numero = i + 1;
  const fruta = comuns2[i];
  if (numero === 1) {
    console.log(`${numero} ${fruta} incomoda muita gente`);
  } else {
    console.log(`${numero} ${fruta} incomodam, incomodam muito mais`);
  }
}

// Questão 12: Faça uma função completa que recebe duas listas e imprime o padrão da música
function imprimirFrasesMusicais(lista1, lista2) {
  const comuns = intersecao(lista1, lista2);
  for (let i = 0; i < comuns.length; i++) {
    const numero = i + 1;
    const fruta = comuns[i];
    if (numero === 1) {
      console.log(`${numero} ${fruta} incomoda muita gente`);
    } else {
      console.log(`${numero} ${fruta} incomodam, incomodam muito mais`);
    }
  }
}
imprimirFrasesMusicais(frutasA, frutasB);
