function solve(
  number,
  operation1,
  operation2,
  operation3,
  operation4,
  operation5
) {
  let numberAsNum = Number(number);
  let tokens = [operation1, operation2, operation3, operation4, operation5];
  for (let index = 0; index < tokens.length; index++) {
    if (tokens[index] === "chop") {
      number /= 2;
    } else if (tokens[index] === "spice") {
      number++;
    } else if (tokens[index] === "bake") {
      number *= 3;
    } else if (tokens[index] === "fillet") {
      number = number - (number * 20) / 100;
    }
    else{
        let result = Math.sqrt(number)
        number = result;
    }
    console.log(number);
  }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
