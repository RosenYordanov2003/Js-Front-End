function solve(symbol1, symbol2, symbol3) {
  let array = [symbol1, symbol2, symbol3];
  for (let index = 0; index < array.length/2; index++) {
    let currentElement = array[index];
    let currentLastElement = array[array.length-1-index];
    array[index] = currentLastElement;
    array[array.length-1-index] = currentElement;
  }
  console.log(array.join(' '))
}
solve("A", "B", "C");
