//// PASSA QUANDO NÃO DEVERIA PASSAR

// test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//   }, 500);
// });

//// NÃO PASSA - O QUE É ESPERADO (EDIT: alterei o 'expect' pra ser igual ao 'toBe', então passa)

test("Não deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(10);
    console.log('Deveria falhar!')
    done();
  }, 500);
});