// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

let myTasks = document.querySelector('.my-tasks');

function addNewTask(taskString) {
  let newTask = document.createElement('span');
  newTask.innerText = taskString;
  myTasks.appendChild(newTask);
}

addNewTask('cozinhar')