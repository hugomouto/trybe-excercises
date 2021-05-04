
const drawCheck = (bet, randomNumber) => {
  return bet === randomNumber ? true : false;
}


const drawResult = (bet, action) => {
  const randomNumber = Math.round(Math.random()*5)
  console.log(randomNumber)
  console.log(bet)
  if (action(bet, randomNumber)) {
    console.log("Parabéns você ganhou");
  } else {
    console.log("Tente novamente");
  }
}

drawResult(3, drawCheck);