// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" 

let buttonFriday = document.createElement('button');
buttonFriday.id = 'btn-friday';
buttonFriday.innerText = 'Sexta-Feira';
document.querySelector('.buttons-container').appendChild(buttonFriday);