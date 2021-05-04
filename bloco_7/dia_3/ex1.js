const assert = require('assert');

const sumOfNum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error ('parameters must be numbers');
  }
  return a + b;
};

assert.strictEqual(sumOfNum(4,5),9,'Já deu merda aqui')
assert.strictEqual(sumOfNum(0,0),0,'Já deu merda aqui')
assert.throws(() => {
  sumOfNum(4,'5')
},  /^Error: parameters must be numbers$/)

console.log(sumOfNum(4,'5'))