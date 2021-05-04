const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EX1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function newTurn (object, objectKey, value) {
  object[objectKey] = value;
}
newTurn(lesson2, 'turno', 'manhã')
// console.log(lesson2)

// EX2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function getObjectKeys (object) {
  return Object.keys(object);
}
// console.log(getObjectKeys(lesson2))

// EX3 - rie uma função para mostrar o tamanho de um objeto.
function showObjectSize (objectKeys) {
  return objectKeys.length;
}
// console.log(showObjectSize(getObjectKeys(lesson2)))

// EX4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function getObjectValues (object) {
  return Object.values(object);
}
// console.log(getObjectValues(lesson2))

// EX5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
let allLessons = {
  lesson1 : {},
  lesson2 : {},
  lesson3 : {},
}
allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

// EX6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. 
console.log(`-------- Com For In -------`)
function countStudents (object) {
  let studentCount = 0;
  for (let lessons in object) {
    studentCount += object[lessons].numeroEstudantes;
  }
  return studentCount;
}

console.log(countStudents(allLessons))


console.log(`-------- Com Loop Normal-------`)

function countStudents2 (object) {
  const allLessonsKeys = Object.keys(allLessons);
  let studentCount = 0;
  for (let i = 0; i < allLessonsKeys.length; i += 1) {
    studentCount += object[allLessonsKeys[i]].numeroEstudantes; 
  }
  return studentCount;
}
console.log(countStudents2(allLessons))

// EX7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
function getValueByNumber (object, number) {
  const objectKeys = Object.keys(object);
  return object[objectKeys[number]];
}
console.log(getValueByNumber(lesson1, 0))

// EX8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
console.log(`-------- 
EX8
-------`)
function verifyPair (object, key, value) {
  const objectEntries = Object.entries(object);
  const objectPair = [key, value];
  console.log(objectEntries);
  console.log(objectPair);
  for (let i = 0; i < objectEntries.length; i += 1) {
    if (objectEntries[i] === objectPair) {
      return true;
    } 
  }
}
console.log(verifyPair(lesson3, 'turno', 'noite'))

const oi = () => {
  
}