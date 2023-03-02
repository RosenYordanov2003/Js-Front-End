function addAndSubtract(number1, number2, number3) {
  function sum(number1, number2) {
    return number1 + number2;
  }

  let sumResult = sum(number1, number2);

  function subtract(number1, number2) {
    return number1 - number2;
  }

  let finalResult = subtract(sumResult, number3);

  console.log(finalResult);
}
addAndSubtract(23, 6, 10);
