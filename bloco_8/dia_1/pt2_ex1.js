const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const dragonAttack = Math.round(Math.random()*maxDamage);
  return  dragonAttack < minDamage ? minDamage : dragonAttack; 
}

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const mageAttack = Math.round(Math.random()*maxDamage);
  return  mageAttack < minDamage ? minDamage : mageAttack; 
}

const mageDamage = () => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const mageAttack = Math.round(Math.random() * maxDamage);
  const finalDamage = mageAttack < minDamage ? minDamage : mageAttack;
  mage.mana -= 15;
  if (mage.mana < 15) {
    return `Not enough mana!`
  } else {
    return finalDamage;
  }
}

const gameActions = {
  warriorTurn: (warriorDamage) => {
    warrior.damage = warriorDamage(),
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageDamage) => {
    mage.damage = mageDamage(),
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonDamage) => {
    dragon.damage = dragonDamage(),
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  turnResult: () => {
    return battleMembers;
  }
}

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResult())
