const buttonCounter = document.getElementById('click-count');
const counterDisplay = document.getElementById('count-result')
let counter = 0; 

buttonCounter.addEventListener('click', () => {
  counterDisplay.innerText = counter +=1;
})