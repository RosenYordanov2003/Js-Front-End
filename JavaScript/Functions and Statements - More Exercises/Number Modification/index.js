function numberModification(number) {
  //Append Logic
  function appendDigit(number) {
    let stringAsNumber = String(number);
    stringAsNumber += "9";
    return Number(stringAsNumber);
  }
  //calculate average sum logic
  function averageSumFromDigits(number) {
    let sum = 0;
    let count = 0;
    while (number > 0) {
      let digit = number % 10;
      sum += digit;
      number = Math.trunc((number /= 10));
      count++;
    }
    return sum/count;;
  }
  //main logic
  while (averageSumFromDigits(number) <= 5) {
    number = appendDigit(number);
  }
  console.log(number);
}
numberModification(5835);
