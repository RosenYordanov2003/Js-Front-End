function pointsValidation(array) {
  function checkCoordinates(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  let x1 = array[0];
  let y1 = array[1];
  let x2 = array[2];
  let y2 = array[3];

  let firstCoordinates = checkCoordinates(x1, y1, 0, 0);
  if (Number.isInteger(firstCoordinates)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  let secondCoordinates = checkCoordinates(x2, y2, 0, 0);
  if (Number.isInteger(secondCoordinates)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  let thirdCoordinates = checkCoordinates(x1, y1, x2, y2);
  if (Number.isInteger(thirdCoordinates)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
pointsValidation([2, 1, 1, 1]);
