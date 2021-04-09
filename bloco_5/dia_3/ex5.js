// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

buttonFriday.addEventListener('click', function () {
  let allFridays = document.getElementsByClassName('friday')
  const fridayList = ["4", "11", "18", "25"]
  for (let i = 0; i < allFridays.length; i += 1) {
    if (allFridays[i].innerText !== 'SEXTOU!') {
      allFridays[i].innerText = 'SEXTOU!';
    } else {
      allFridays[i].innerText = fridayList[i];
    }
  }
})