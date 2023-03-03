<<<<<<< HEAD
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
=======
function factorialDivision(firstNumber, secondNumber){
    function calculateFactorial(number){
        let sum = 1;
        while(number>0){
            sum*=number;
            number--;
        }
        return sum;
    }
    let firstResult = calculateFactorial(firstNumber);
    let secondResult = calculateFactorial(secondNumber);
    console.log((firstResult/secondResult).toFixed(2));
}
factorialDivision(5,2)
>>>>>>> 704e2f73a5b308d670e08b8dc680ef77af1e11e5
