// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .
let daysContainer = document.querySelector('.days-container');

daysContainer.addEventListener('mouseover', function(event){
  let dayZoomIn = event.target.style;
  dayZoomIn.fontSize = '30px'
})

daysContainer.addEventListener('mouseout', function(event){
  let dayZoomIn = event.target.style;
  dayZoomIn.fontSize = '20px'
})