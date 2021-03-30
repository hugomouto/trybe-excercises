let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];


// for (let index = 1; index < numbers.length; index += 1) {
//   for (let indexSec = 0; indexSec < index; index +=1) { // Deu errado porque ele reseta e pega a posição 2 pra multiplicar pela 0 e segue assim
//     let newNumber = numbers[index] * numbers[indexSec]
//     newArray.push(newNumber);
//   }
// }

// console.log(newArray);

for (let index = 0; index < numbers.length; index += 1) {
    if (index === 9) {
        let lastNumber = numbers[numbers.length-1] * 2
        newArray.push(lastNumber);  
    } else {
        let newNumber = numbers[index] * numbers[index + 1]
        newArray.push(newNumber);
    }
}


console.log(newArray);