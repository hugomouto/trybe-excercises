// i = 2; i <= n; i+=1;
// se n % i = 0, imprimir 'Não é número primo'

let number =7535;
let primeNumber = 0;

//let t0 = performance.now()

for (let i = 1; i <= number; i +=1) {
  if (number%i === 0) {
    let divisão = number%i
    primeNumber +=1;
  } 
  if (primeNumber === 2 && i !== number) {
    console.log('Não é primo, pois é divisível por ' + i)
    break;
  } 
  if (primeNumber === 2 && i === number) {
    console.log('É primo.')
  }
}

//let t1 = performance.now()
// console.log(t1-t0);

// se restou