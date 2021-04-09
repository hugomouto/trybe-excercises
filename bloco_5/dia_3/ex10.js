// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

daysContainer.addEventListener('click', function(event) {
  let coloredDay = event.target;
  if (coloredDay.style.color === 'rgb(119, 119, 119)' || coloredDay.style.color === '' ) {
    coloredDay.style.color = task.style.backgroundColor;
  } else { coloredDay.style.color = 'rgb(119, 119, 119)' }
})