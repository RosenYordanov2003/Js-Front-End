function solve(array, step) {
  let outputArray = [];
  for (let index = 0; index < array.length; index += step) {
    if (index < array.length) {
      outputArray.push(array[index]);
    }
  }
  return outputArray;
}
solve(["dsa", "asd", "test", "tset"], 2);
