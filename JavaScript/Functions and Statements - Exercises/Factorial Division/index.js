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