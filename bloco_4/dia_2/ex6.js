let numbers = [52, 2, 32, 192, 70, 8, 100, 2, 352, 272];

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numOdd = 0;

for (index = 0; index<numbers.length; index +=1) {
  if (numbers[index] % 2 !== 0) {
    numOdd +=1;
  }
}

if (numOdd==0) {
  console.log('Nenhum número ímpar');
} else {
  console.log(numOdd);
}
