function findEvenAndOddSum(number) {
  function findEvenSum(number) {
    let sum = 0;
    while (number > 0) {
      let currentDigit = number % 10;
      if (currentDigit % 2 === 0) {
        sum += currentDigit;
      }
      number = Math.trunc((number /= 10));
    }
    return sum;
  }

  function findOddSum() {
    let sum = 0;
    while (number > 0) {
      let currentDigit = number % 10;
      if (currentDigit % 2 !== 0) {
        sum += currentDigit;
      }
      number = Math.trunc((number /= 10));
    }
    return sum;
  }

  let evenSum = findEvenSum(number);

  let oddSum = findOddSum(number);

  let array = [];
  array[0] = `Odd sum = ${oddSum}`;
  array[1] = `Even sum = ${evenSum}`;

  console.log(array.join(", "));
}
findEvenAndOddSum(1000435);
