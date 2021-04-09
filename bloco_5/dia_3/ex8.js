// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addColor(cor) {
  let task = document.createElement('div');
  task.classList.add('task')
  task.style.backgroundColor = cor;
  myTasks.appendChild(task);
}

addColor('blue');