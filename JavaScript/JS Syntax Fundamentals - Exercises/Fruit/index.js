function solve(fruitType, weights, pricePerKilogram) {
  let moneyNeeded = weights * pricePerKilogram;
  moneyNeeded/=1000;
  weights/=1000;
  console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weights.toFixed(2)} kilograms ${fruitType}.`);
}
solve('orange', 2500, 1.80);
