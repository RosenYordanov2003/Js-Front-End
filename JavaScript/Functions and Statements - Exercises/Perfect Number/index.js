function perfectNumber(number) {
  let divider = number - 1;
  let sum = 0;
  while (divider > 0) {
    if(number%divider===0){
      sum+=divider;
    }
    divider--;
  }
  console.log(sum===number?'We have a perfect number!':'It\'s not so perfect.');
  
}
perfectNumber(1236498)
