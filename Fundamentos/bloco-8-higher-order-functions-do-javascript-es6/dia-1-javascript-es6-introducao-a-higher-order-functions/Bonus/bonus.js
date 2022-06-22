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

const danoDragao = (dragon) => { 
 let danoMinimo = 15
 const dragonDmg = Math.floor((Math.random() * (dragon.strength - danoMinimo + 1) + danoMinimo));
 return dragonDmg;
}

const danoWarrior = (warrior) => {
  let danoMinimo = warrior.strength
  let danoMaximo = danoMinimo * warrior.weaponDmg
  const warriorDano = Math.floor((Math.random() * (danoMaximo - danoMinimo +1)+ danoMinimo))
  return warriorDano;
}


const danoMage = (mage) => {({
  dano: Math.floor((Math.random() * (intelligence*2 - intelligence +1)+ intelligence)),
  mana: 15
})  
  if (mana.value < 15){
    "Não possui mana suficiente"
  }
}

// const mageAttack = (mage) => {
//   const mageMana = mage.mana;
//   const minDmg = mage.intelligence;
//   const maxDmg = minDmg * 2;
//   const turnStats = {
//     manaSpent: 0,
//     damageDealt: 'Not enough mana...',
//   };

//   if (mageMana > 15) {
//     const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
//     turnStats.manaSpent = 15;
//     turnStats.damageDealt = mageDamage;
//     return turnStats;
//   }
//   return turnStats;
// };

//Parte  II