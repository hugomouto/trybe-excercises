// function fatorial(number) {
//   let resultado = 1;
//   for (let index = number; index > 0; index -=1) {
//     resultado = index*resultado;
//   }
//   console.log(resultado)
// }

// fatorial(3)

const factor = n => {
  let resultado = 1;
  for (let index = n; index > 0; index -=1) {
    // resultado = index*resultado;
    resultado *= index
  }
  console.log(resultado)
}

factor(4)

// recursiva 

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(4))