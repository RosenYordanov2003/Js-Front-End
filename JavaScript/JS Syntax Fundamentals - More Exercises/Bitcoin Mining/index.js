function solve(array) {
  let currentMoneyFromGold = 0;
  const bitcoinPrice = 11949.16;
  const goldPrice = 67.51;
  let arrayResult = array.map(function (val, i) {
    return (i + 1) % 3 === 0 ? val * 0.7 : val;
  });

  let day = 0;
  let countBoughtBitcoins = 0;

  for (let index = 0; index < arrayResult.length; index++) {
    
    let currentGramsOfGold = arrayResult[index];

    currentMoneyFromGold += currentGramsOfGold * goldPrice;

    if (currentMoneyFromGold >= bitcoinPrice) {
      if (countBoughtBitcoins === 0) {
        day = index + 1;
      }
      countBoughtBitcoins++;
      currentMoneyFromGold -= bitcoinPrice;

      while(currentMoneyFromGold>=bitcoinPrice){
        currentMoneyFromGold-=bitcoinPrice;
        countBoughtBitcoins++;
      }
    }
  }
  console.log(`Bought bitcoins: ${countBoughtBitcoins}`);
  if (countBoughtBitcoins !== 0) {
    console.log(`Day of the first purchased bitcoin: ${day}`);
  }
  console.log(`Left money: ${currentMoneyFromGold.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124]);
