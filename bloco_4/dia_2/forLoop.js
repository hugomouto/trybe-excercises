let listaDeNomes = ['Joana','Maria','Lucas']

for (var indice = 0; indice < listaDeNomes.length; indice++) {
  var mensagem = "Boas vindas, " + listaDeNomes[indice] + '!';
  console.log(mensagem)
}

// Primeiro se define a variável que vai ser o índice, o contator. (var indice = 0)
// Segundo passo é testado se a condição é verdadeira: se o índice é menor que o valor atribuido. (indice < listaDeNomes.length;)
// A tarefa então é executada
// Em seguida, soma-se de acordo com a unidade definida. (indice++)
// A função novamente checa se a condição é verdadeira. (indice < listaDeNomes.length;)
// Se sim, ela a executa novamente, até fechar o loop.

let cars = ['Saab', 'Volvo', 'BMW'];

for (var contador = 0; contador<cars.length; contador+=1) {
  console.log(cars[contador]);
}

////////////

//For Of

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let cadaUm of names) {
  console.log(cadaUm);
}