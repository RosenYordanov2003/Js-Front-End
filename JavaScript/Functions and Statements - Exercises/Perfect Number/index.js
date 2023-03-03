function perfectNumber(number) {
  let divider = number - 1;
  let sum = 0;
  while (divider > 0) {
<<<<<<< HEAD
    if(number%divider===0){
      sum+=divider;
    }
    divider--;
  }
  console.log(sum===number?'We have a perfect number!':'It\'s not so perfect.');
  
=======
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
>>>>>>> 704e2f73a5b308d670e08b8dc680ef77af1e11e5
}
perfectNumber(1236498)
