const ex1 = require('./ex1');

test('Mockundo a função', () => {
  ex1.randomTo100 = jest.fn().mockReturnValue(10);
  
  expect(ex1.randomTo100()).toBe(10);
  expect(ex1.randomTo100).toHaveBeenCalled();
  expect(ex1.randomTo100).toHaveBeenCalledTimes(1);
})

test('Forçando parâmentros - divisão', () => {
  ex1.randomTo100.mockImplementation((a,b) => a/b);
  expect(ex1.randomTo100(10,5)).toBe(2);
  expect(ex1.randomTo100).toHaveBeenCalled();
  expect(ex1.randomTo100).toHaveBeenCalledTimes(2);
})

test('Forçando parâmetros - multiplicação', () => {
  ex1.randomTo100.mockImplementation((a,b,c) => a*b*c);
  expect(ex1.randomTo100(1,2,3)).toBe(6);
  expect(ex1.randomTo100).toHaveBeenCalled();
  expect(ex1.randomTo100).toHaveBeenCalledTimes(3);
  ex1.randomTo100.mockReset();
})

test('Forçando parâmetros - pós reset', () => {
  ex1.randomTo100.mockImplementation((x) => x*2);
  expect(ex1.randomTo100(2)).toBe(4);
  expect(ex1.randomTo100).toHaveBeenCalled();
  expect(ex1.randomTo100).toHaveBeenCalledTimes(1);
})
