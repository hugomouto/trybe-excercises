// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

let task = document.querySelector('.task')


task.addEventListener('click', function() {
  let newTask = document.querySelector('span').classList;
  if (newTask == 'task-selected') {
    newTask.remove('task-selected')
  } else {
    newTask.add('task-selected');
  }
})