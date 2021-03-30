
/////////// OBJETOS ///////////

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

let marta = {
 name: 'Marta',
 lastName: 'Silva',
 age: 34,
 medals: { golden: 2, 
           silver: 3 },
 bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

//"A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + marta.name + ' ' + marta.lastName  + ' foi eleita a melhor do mundo por ' + marta.bestInTheWorld.length +' vezes.');

// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + marta.medals.golden + ' medalhas de ouro e ' + marta.medals.silver + ' medalhas de prata')

/////////// FOR/IN ///////////

//Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
} 

for (let i in names) {
  console.log('Olá, ' + names[i]);
}

// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor 'modelo: A3 Sedan, marca: Audi, ano:2020' .

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let key in carro) {
  console.log(key + ' ' + carro[key]);
}



// Nenhuma função deve ter uma dependência externa