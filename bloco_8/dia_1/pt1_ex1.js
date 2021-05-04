const hiredEmployee = (fullName) => {
  const employeeObject = {
    nomeCompleto: fullName,
    email: `${fullName}@trybe.com`.split(' ').join('_').toLowerCase(),
  }
  return employeeObject;
}

const newEmployees = () => {
  const employees = {
    id1: hiredEmployee('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: hiredEmployee('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: hiredEmployee('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};



console.log(newEmployees())