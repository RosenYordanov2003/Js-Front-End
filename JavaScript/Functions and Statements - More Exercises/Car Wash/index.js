function carWash(array) {
  let sum = 0;

  const addFunction = (a, b) => a + b;

  const percentageFunction = (a, b) => a * (b / 100);

  for (const command of array) {
    if (command === "soap") {
      sum = addFunction(sum, 10);
    } else if (command === "water") {
      sum += percentageFunction(sum, 20);
    } else if (command === "vacuum cleaner") {
      sum += percentageFunction(sum, 25);
    } else {
      sum -= percentageFunction(sum, 10);
    }
  }
  console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
