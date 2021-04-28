// get CPF input
const cpfInput = document.getElementById('cpf');
// get all inputs
const allInputs = document.getElementsByTagName('input');
// get final info
const finalInfo = document.getElementById('finalinfo');

// Restrict CPF max length
function checkCPF(cpf) {
  cpf = cpfInput.value;
  if (cpf.toString().length > 11) {
    cpfInput.value = cpf.slice(0,10) // slice the number string form 0 to 11
  }
}

//// Prevent submit
document.getElementById("submeter").addEventListener("click", function(event){
  event.preventDefault()
});

//// Plot info
function moveInfo() {
  for (let key of allInputs) {
    let newPragraph = document.createElement('p');
    newPragraph.innerText = key.value;
    finalInfo.appendChild(newPragraph);
  }
}