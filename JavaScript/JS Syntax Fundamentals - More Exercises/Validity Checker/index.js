function validityChecker(x1, y1, x2, y2) {
  function checkCoordinates(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

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
