// Como vimos no vídeo acima, uma das grandes vantagens dos arrays é o armazenamento de várias informações em uma mesma estrutura. Veja o exemplo e pratique:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

// Sempre que precisar armazenar várias informações, o Array é uma boa alternativa e será uma ferramenta muito útil. Observamos que por meio do .length , você consegue ter acesso à quantidade de elementos contidos nele. Agora, como podemos acessar essas informações? Veja este exemplo:

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.unshift('Ler o jornal'); // Adiciona no começo da lista
console.log(tasksList);

tasksList.push('Ir para o escritório'); // Adiciona no final da lista
console.log(tasksList);

tasksList.pop(); // Remove o último ítem
console.log(tasksList);

tasksList.shift(); // Remove o primeiro da lista
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);