const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.
// function sortFunction (a,b) {
//   return (a-b)
// }

// console.log(`Os números ${oddsAndEvens.sort(sortFunction)} se encontram ordenados de forma crescente`);

////

console.log(`Os números ${oddsAndEvens.sort((a,b) => a -b)} se encontram ordenados de forma crescente`);