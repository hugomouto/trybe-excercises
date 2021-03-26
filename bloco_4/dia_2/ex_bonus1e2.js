let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

// for (let index = 0; index )
//   if (ray[index]>ray[index+1]) { // Não funcionaria porque "index + 1" seria no final maior que o vetor
//     let position = ray[index];
//     ray[index] = ray[index+1];
//     ray[index+1] = position;
//   }

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) { //secondIndex reseta pra zero de novo após int completa
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }



for (let index = 1; index < array.length; index += 1) {
  for (let indexSec = 0; indexSec < index; indexSec += 1) {
    if (array[index] < array[indexSec]) {
      let position = array[indexSec];
      array[indexSec] = array[index];
      array[index] = position;
    }
  }
}

console.log(array);

for (let index = 1; index < array.length; index += 1) {
  for (let indexSec = 0; indexSec < index; indexSec += 1) {
    if (array[index] > array[indexSec]) {
      let position = array[indexSec];
      array[indexSec] = array[index];
      array[index] = position;
    }
  }
}

console.log(array);