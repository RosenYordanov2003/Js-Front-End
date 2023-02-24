function solve(fightsLost, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    
  let countBrokenHelmets = Math.trunc(fightsLost/2);

  let countBrokenSwords = Math.trunc(fightsLost/3);

  let countBrokenShields = Math.trunc(fightsLost/6);

  let countBrokenArmor = Math.trunc(fightsLost/12);
  
  let totalPrice = (countBrokenHelmets*helmetPrice) + (countBrokenSwords*swordPrice) + (countBrokenShields * shieldPrice) + (countBrokenArmor*armorPrice);
  
  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

solve(23, 12.5, 21.5, 40, 200);
