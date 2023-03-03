function radioCrystals(array) {
  function checkPositions(currentPosition, previousPosition) {
    return currentPosition === previousPosition;
  }

  function print(dictionary, outputOperations) {
    for (let key in dictionary) {
      if (key !== "X-ray") {
        if (dictionary[key] !== 0) {
          outputOperations.push(`${key} x${dictionary[key]}`);
          outputOperations.push("Transporting and washing");
        }
      }
      else{
        if (dictionary[key] !== 0) {
            outputOperations.push(`${key} x${dictionary[key]}`);
          }
      }
    }
  }

  function processingCurrentCrystal(crystal) {
    let dictionary = {
      Cut: 0,
      Lap: 0,
      Grind: 0,
      Etch: 0,
      "X-ray": 0,
    };
    let countXray = 0;

    let currentPosition = "";
    let previousPosition = "";
    while (crystal !== thicknessToReach) {
      if (crystal / 4 >= thicknessToReach) {
        crystal /= 4;
        currentPosition = "Cut";
        if (previousPosition === "") {
          dictionary[currentPosition]++;
          previousPosition = currentPosition;
          continue;
        }
        if (!checkPositions(currentPosition, previousPosition)) {
          crystal = Math.floor(crystal);
          previousPosition = currentPosition;
        }
        dictionary[currentPosition]++;
      } else if (crystal - (crystal * 20) / 100 >= thicknessToReach) {
        crystal -= (crystal * 20) / 100;
        currentPosition = "Lap";
        if (previousPosition === "") {
          dictionary[currentPosition]++;
          previousPosition = currentPosition;
          continue;
        }
        if (!checkPositions(currentPosition, previousPosition)) {
          crystal = Math.floor(crystal);
          previousPosition = currentPosition;
        }
        dictionary[currentPosition]++;
      } else if (crystal - 20 >= thicknessToReach) {
        crystal -= 20;
        currentPosition = "Grind";
        if (previousPosition === "") {
          dictionary[currentPosition]++;
          previousPosition = currentPosition;
          continue;
        }
        if (!checkPositions(currentPosition, previousPosition)) {
          crystal = Math.floor(crystal);
          previousPosition = currentPosition;
        }
        dictionary[currentPosition]++;
      } else if (crystal - 2 >= thicknessToReach) {
        crystal -= 2;
        currentPosition = "Etch";
        if (previousPosition === "") {
          dictionary[currentPosition]++;
          previousPosition = currentPosition;
          continue;
        }
        if (!checkPositions(currentPosition, previousPosition)) {
          crystal = Math.floor(crystal);
          previousPosition = currentPosition;
        }
        dictionary[currentPosition]++;
      } else if (countXray !== 1 && thicknessToReach - (crystal % 2) !== 0) {
        crystal += 1;
        currentPosition = "X-ray";
        countXray++;
        if (previousPosition === "") {
          dictionary[currentPosition]++;
          previousPosition = currentPosition;
          continue;
        }
        if (!checkPositions(currentPosition, previousPosition)) {
          crystal = Math.floor(crystal);
          previousPosition = currentPosition;
        }
        dictionary[currentPosition]++;
      }
    }
    print(dictionary, outputOperations);
    outputOperations.push(`Finished crystal ${thicknessToReach} microns`);
  }

  let thicknessToReach = array[0];
  let outputOperations = [];
  for (let index = 1; index < array.length; index++) {
    outputOperations.push(`Processing chunk ${array[index]} microns`);
    processingCurrentCrystal(array[index], thicknessToReach, outputOperations);
  }
  console.log(outputOperations.join("\r\n"));
}
radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);
