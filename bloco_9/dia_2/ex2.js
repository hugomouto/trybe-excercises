function fetchPromise() {
  const myPromise = new Promise((resolve,reject) => {
    const array = [];
    for (let i = 0; i < 10; i +=1) {
      let arrayNumbers = Math.ceil(Math.random()*50);
      hold = arrayNumbers*arrayNumbers;
      array.push(hold) 
    }
    const sum = array.reduce((acc, cv) => acc + cv,0);
    sum < 8000 ? resolve(sum) : reject();
  });

  myPromise
    .then((sum) => console.log([sum/2, sum/3, sum/5, sum/10]))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromise()