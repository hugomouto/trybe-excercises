const returnUpperCase = (str) => {
  return str.toUpperCase();
}

const returnFirstChar = (str) => {
  return str.charAt(0);
}

const concatStrings = (str1,str2) => {
  return `${str1}${str2}`
}

module.exports = {
  returnFirstChar,
  returnUpperCase,
  concatStrings,
}