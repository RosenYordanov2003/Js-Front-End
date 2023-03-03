function factorialDivision(firstNumber, secondNumber) {
  function calculateFactorial(number) {
    if (number === 1) {
      return number;
    }
    return number * calculateFactorial(number - 1);
  }
  let firstResult = calculateFactorial(firstNumber);
  let secondResult = calculateFactorial(secondNumber);
  console.log((firstResult / secondResult).toFixed(2));
}
factorialDivision(5, 2);
