let numeroAst = 5;
let arrayAst = [];
let mid = Math.floor(numeroAst/2);

for (let index = 0; index <= numeroAst; index +=1) {
  arrayAst.push(' ');
}

for (i = 0; i <= numeroAst - mid; i +=1) {
  if (i < numeroAst - mid) {
    arrayAst[mid+i] = '*';
    arrayAst[mid-i] = '*';
    console.log(arrayAst.join(''))
  }
}



// GABARITO TRYBE /////////////////////////

// let n = 7;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };