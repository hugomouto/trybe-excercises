const ex4 = require('./ex4');
jest.mock('./ex4')

test('Mock da primeira função - Retornar Minúsculo', () => {
  ex4.returnUpperCase.mockImplementation((str) => str.toLowerCase());
  
  expect(ex4.returnUpperCase('TEST')).toBe('test');
})