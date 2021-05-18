// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'creme de leite', 'morango'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));