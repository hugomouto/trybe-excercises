const array = [1, 2, 3, 4, 5, 6, 7, 8] //36

const sum = array.reduce((acc, cV) => {
  console.log(`acc = ${acc}`);
  console.log(`cV = ${cV}`);
  return acc + cV;
}, "nomes: ");

console.log(sum);