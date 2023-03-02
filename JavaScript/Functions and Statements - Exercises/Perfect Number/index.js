function perfectNumber(number) {
  let divider = number - 1;
  let sum = 0;
  while (divider > 0) {
    let result = number / divider;
    if (Number.isInteger(result)) {
     sum+=divider;
    }
    divider--;
  }
  if (sum === number && number > 0) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumber(1236498)
