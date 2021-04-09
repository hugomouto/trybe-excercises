// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode .

let myTasks = document.querySelector('.my-tasks');
let compromissoInput = document.getElementById('task-input');
compromissoInput.addEventListener('keyup', function(event) {
  let pressedKey = event.which || event.keyCode;
  if (pressedKey == 13) {
    addNewTask()
  }
})

function addNewTask() {
  
  let newTask = document.createElement('span');
  if (compromissoInput === '') {
    alert('Campo Vazio');
  } else {newTask.innerText = compromissoInput.value;}
  myTasks.appendChild(newTask);
}

// addNewTask('cozinhar')

function addColor(cor) {
  let task = document.createElement('div');
  task.classList.add('task')
  task.style.backgroundColor = cor;
  myTasks.appendChild(task);
}

addColor('blue');