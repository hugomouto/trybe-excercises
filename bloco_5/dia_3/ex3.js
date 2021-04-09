// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

buttonHoliday.addEventListener('click', function (){
  let holidayList = document.getElementsByClassName('holiday');
  for (let key of holidayList) {
    if (key.style.backgroundColor === 'rgb(207, 216, 220)') {
      key.style.backgroundColor = 'rgb(238,238,238)'
    } else {
      key.style.backgroundColor = 'rgb(207, 216, 220)';
    }
  }
})