function solve(startingYield) {
  let countDays = 0;
  let spices = 0;
  while (startingYield >= 100) {
    countDays++;
    spices += startingYield;
    if (spices >= 26) {
      spices -= 26;
    }
    startingYield -= 10;
  }
  if(spices>=26){
    spices-=26;
  }
  console.log(countDays);
  console.log(spices);
}
solve(450);
