function solve(start, end) {
  let sum = 0;
  let array = [];
  for (let index = start; index <= end; index++) {
    array.push(index);
    sum += index;
  }
  console.log(array.join(' '));
  console.log(`Sum: ${sum}`);
}
solve(5, 10);
