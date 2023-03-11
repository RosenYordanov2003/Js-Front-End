function sequences(array) {
  const resultArray = [];
  for (let index = 0; index < array.length; index++) {
    let areSame = false;
    const currentLine = JSON.parse(array[index]);
    if (resultArray.length === 0) {
      resultArray.push(currentLine);
    } else {
      for (let index = 0; index < resultArray.length; index++) {
        if (areEqual(resultArray[index], currentLine)) {
          areSame = true;
          break;
        }
      }
      if(!areSame){
        resultArray.push(currentLine);
      }
    }
  }

  printResult(resultArray);

  function areEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    return arrayOne.every((item, index) => item === arrayTwo[index]);
  }
  function printResult(array) {
    array.sort((a, b) => a.length - b.length);
    array.forEach((array) => {
      array.sort((a, b) => b - a);
    });
    array.forEach((line) => console.log(`[${line.join(', ')}]`));
  }
}
sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
  
]);
