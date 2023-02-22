function solve(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  let outpuArray = [];
  let bonusIndex = 0;
  for (let index = 0; index < array.length; index++) {
    if (bonusIndex % 2 == 0) {
      let value = array.shift();
      outpuArray.push(value);
    } else {
      let value = array.pop();
      outpuArray.push(value);
    }
    bonusIndex++;
    index--;
  }
  return outpuArray;
}
solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
