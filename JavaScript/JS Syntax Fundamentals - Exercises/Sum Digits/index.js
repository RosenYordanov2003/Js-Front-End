function sovle(number) {
  let numberSum = 0;
  while (number > 0) {
    let digit = number % 10;
    numberSum += digit;
    number /= 10;
    number=parseInt(number);
  }
  console.log(numberSum)
}
sovle(245678)
