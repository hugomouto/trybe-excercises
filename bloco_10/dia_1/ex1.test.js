// Desafio 9
function encode(stringDesafio9pt1) {
  stringDesafio9pt1 = stringDesafio9pt1.replace(/a/g, 1);
  stringDesafio9pt1 = stringDesafio9pt1.replace(/e/g, 2);
  stringDesafio9pt1 = stringDesafio9pt1.replace(/i/g, 3);
  stringDesafio9pt1 = stringDesafio9pt1.replace(/o/g, 4);
  stringDesafio9pt1 = stringDesafio9pt1.replace(/u/g, 5);
  return stringDesafio9pt1;
}

function decode(stringDesafio9pt2) {
  stringDesafio9pt2 = stringDesafio9pt2.replace(/1/g, 'a');
  stringDesafio9pt2 = stringDesafio9pt2.replace(/2/g, 'e');
  stringDesafio9pt2 = stringDesafio9pt2.replace(/3/g, 'i');
  stringDesafio9pt2 = stringDesafio9pt2.replace(/4/g, 'o');
  stringDesafio9pt2 = stringDesafio9pt2.replace(/5/g, 'u');
  return stringDesafio9pt2;
}

test('Encode & Decode', () => {
  expect(typeof enconde && typeof decode).toBe('function');
  expect(encode('aeiou')).toBe(`12345`);
  expect(decode('12345')).toBe(`aeiou`);
});