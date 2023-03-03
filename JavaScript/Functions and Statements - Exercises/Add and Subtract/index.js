function addAndSubtract(number1, number2, number3) {

  const sum = (a, b) => a + b;

  const subtract = (sum, b) => sum - b;

  console.log(subtract(sum(number1,number2),number3));
}
addAndSubtract(23, 6, 10);
