const users = {
  4 : { name: 'Mark' },
  5 : { name: 'Paul' }
  };
  
  const findUserById = (id) => { // busca pelo id, devolvendo o resultado ou erro
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name); // retorna o nome
  };

  // it('Valida se retorna o nome correto do usuário', () => {
  //   expect(getUserName(4)).toBe('Mark'); // Porque tenho que colocar outro 'then' se o retorno dela já tem isso
  // })

describe('Valida função de retorno de usuário', () => {
  it('Valida se retorna o nome correto do usuário', () => {
    // expect.assertions(1);
    getUserName(4).then((result) => {
      expect(result).toBe('Mark');
    })
  })

  it('Valida erro na busca por usuário', () => {
    getUserName(2).catch((result) => {
      expect(result).toEqual({ error: 'User with 2 not found.' });
    })
  })
})