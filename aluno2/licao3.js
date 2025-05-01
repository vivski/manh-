// Questão 13: Faça a mesma função, mas use métodos modernos (filter)
function intersecaoModern(a, b) {
    return a.filter(item => b.includes(item));
  }
  console.log(intersecaoModern(["kiwi", "banana"], ["banana", "melancia"])); // ["banana"]
  
  // Questão 14: Gere a saída como um array de frases
  function gerarFrases(lista1, lista2) {
    const comuns = intersecao(lista1, lista2);
    const frases = [];
    for (let i = 0; i < comuns.length; i++) {
      const num = i + 1;
      const item = comuns[i];
      if (num === 1) {
        frases.push(`${num} ${item} incomoda muita gente`);
      } else {
        frases.push(`${num} ${item} incomodam, incomodam muito mais`);
      }
    }
    return frases;
  }
  console.log(gerarFrases(["abacaxi", "banana"], ["banana", "melancia"]));
  
  // Questão 15: Faça a função aceitar letras maiúsculas e minúsculas como iguais
  function intersecaoCaseInsensitive(a, b) {
    const bLower = b.map(item => item.toLowerCase());
    return a.filter(item => bLower.includes(item.toLowerCase()));
  }
  console.log(intersecaoCaseInsensitive(["Banana", "Maçã"], ["banana", "melancia"])); // ["Banana"]
  
  // Questão 16: Mostre também ao final os elementos comuns
  function resolver(lista1, lista2) {
    const comuns = intersecao(lista1, lista2);
    imprimirFrasesMusicais(lista1, lista2);
    console.log(`Os elementos comuns são: ${comuns.map(e => `"${e}"`).join(", ")}`);
  }
  resolver(["maçã", "banana", "pera", "kiwi"], ["uva", "banana", "pera", "melancia"]);
  