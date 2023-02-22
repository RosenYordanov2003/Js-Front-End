function solve(array) {
  array.sort((a, b) => a.localeCompare(b));
  let counter = 0;
  for (let index = 0; index < array.length; index++) {
    console.log(`${++counter}.${array[index]}`);
  }
}
solve([
  "John",
  "Bob",
  "Christina",
  "Ema",
  "G",
  "Vesko",
  "G",
  "John",
  "Bob",
  "Christina",
  "Ema",
  "G",
  "Vesko",
  "G",
]);
