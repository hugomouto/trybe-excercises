// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let buttonHoliday = document.createElement('button');
buttonHoliday.id = 'btn-holiday';
buttonHoliday.innerText = 'Feriados'
document.querySelector('.buttons-container').appendChild(buttonHoliday);