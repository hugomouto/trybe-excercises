// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let space = ' ';
// let nSpace = '';
// let final = ''

// for (let index = 0; index < n; index +=1) {
//   for (let index2 = 0; index2 < n; index) {

//   }
//   inputLine = inputLine + symbol;
//   console.log(inputLine)
// }



// for (let index = 0; index < n; index +=1) {
//   for (let index2 = n; index2 >0; index2 -= 1) {
//     nSpace = nSpace + space;
//     inputLine = inputLine + nSpace + symbol;
//     console.log(inputLine)
//   }
// }


// for (let index = 0; index < n; index +=1) {
//   for (let index2 = n; index2 >0; index2 -=1) {
//     nSpace = nSpace + space;
//   }
//   inputLine = inputLine + symbol;
//   final = nSpace + inputLine; 
//   console.log(inputLine)
// }

// for (let index = 0; index < n; index +=1) {
//   for (let index2 = n; index2 >0; index2 -=1) {
//     nSpace = nSpace + space;
//     inputLine = inputLine + symbol;
//     final = nSpace + inputLine; 
//     console.log(inputLine)
//   }
// }



// for (index = 0; index < n; index +=1) {
//   let numeroEspacoBranco = n - index;
//   inputLine = inputLine + symbol;
//   console.log(inputLine)
// }

//definir numero de espaços como sendo n - 1
//definir numero de asterisco
//colocar espaços na linha
//colocar asteriscos na linha

// criar uma array com n casas com vazias aray[' ',' ',' ',' ',' ',' ',...]
  // se array[n-index]===' ', então array[n-index]='*'
  // imprimir array.join('')


// FUNCIONOU 1.0 /////////////////////////

// let array = [' ',' ',' ',' ',' ',' ']

// for (let i = 0; i < array.length; i +=1) {
//   if (array[array.length - i] === ' ') {
//     array[array.length - i] = '*';
//     console.log(array.join(''))  
//   }
// }

// FUNCIONOU 2.0 ///////////////////////// 

let numeroAst = 5;
let arrayAst = [];

// let t0 = performance.now(); // Marcação de tempo 0

for (let index = 0; index <= numeroAst; index +=1) {
  arrayAst.push(' ');
}
for (let i = 0; i < arrayAst.length; i +=1) {
  if (arrayAst[arrayAst.length - i] === ' ') {
    arrayAst[arrayAst.length - i] = '*';
    console.log(arrayAst.join(''))  
  }
}

// let t1 = performance.now(); // Marcação de tempo 1

// console.log(t1-t0);

// GABARITO TRYBE /////////////////////////

  // for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
  //     if (columnIndex < inputPosition) {
  //       inputLine = inputLine + ' ';
  //     } else {
  //       inputLine = inputLine + symbol;
  //     }
  //   }
  //   console.log(inputLine);
  //   inputLine = '';
  //   inputPosition -= 1;
  // };