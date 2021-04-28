function maiorPalavra(frase) {
  let fraseArray = frase.split(' ');
  let memoria = fraseArray[0];
  // console.log(fraseArray[0].length)
  // console.log(fraseArray[1].length)
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (memoria.length < fraseArray[index].length) {
      memoria = fraseArray[index];
    }
  }
  console.log(memoria);
}

maiorPalavra('ola como vai você fulanodetal abracadabra')

///// ARROW  E TERNÁRIA///

const biggestWord = (frase) => {
  const fraseArray = frase.split(' ');
  let memoria = fraseArray[0];
  for (let index = 0; index < fraseArray.length; index += 1) {
    (memoria.length < fraseArray[index].length) ? memoria = fraseArray[index]: false; 
  }
  console.log(memoria);
}

biggestWord('ola como vai você fulanodetal abracadabra2')

// EM UMA LINHA

