let numeroAst = 4;
let ladoAst = [];



for (let index = 0; index < numeroAst; index +=1) {
  ladoAst.push('*');
  for (let index = 0; index < numeroAst; index +=1) {
    if (ladoAst.length === numeroAst) {
      console.log(ladoAst.join(''));
    }
  }
}

/// Versão Gabarito
console.log('/// Versão Gabarito');


let n = 8;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};