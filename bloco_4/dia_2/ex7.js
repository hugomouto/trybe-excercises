let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[1];

for (index = 0; index < numbers.length; index +=1) {
  if (menor>numbers[index]) {
    menor = numbers[index]
  }
}

console.log(menor);

console.log(numbers[2+2])