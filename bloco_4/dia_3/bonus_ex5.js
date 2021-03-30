let numeroAst = 19;
let arrayAst = [];
let mid = Math.floor(numeroAst/2);

for (let index = 0; index < numeroAst; index +=1) {
  arrayAst.push(' ');
}

for (let i = 0; i <= numeroAst - mid; i +=1) {
  if (i < numeroAst - mid && i < mid) {
    arrayAst[mid+i] = '*';
    arrayAst[mid-i] = '*';
    console.log(arrayAst.join(''))
  } 
  if (arrayAst[mid+i] === '*') {
    arrayAst[mid+i] = ' ';  
    arrayAst[mid-i] = ' ';
  }
  if (i === numeroAst - mid) {
    for (let i2 = 0; i2 < arrayAst.length; i2 +=1)
      if (arrayAst[i2] === ' ') {
        arrayAst[i2] = '*';
      }
    console.log(arrayAst.join(''))  
    break;  
  }
}
