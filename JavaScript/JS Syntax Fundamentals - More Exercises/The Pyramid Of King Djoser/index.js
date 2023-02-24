///stone = (stepLength-1) * (stepWidth-1) * increment
/// lapis lazuli and marble((stepLength * stepWidth) - stoneQuantity) * increment

function solve(base, increment) {
  let endPoint = base % 2 === 0 ? 2 : 1;
  let totalStone = 0;
  let totalLapisLazuli = 0;
  let totalMarble = 0;
  let totalGold = 0;
  let steps = 0;
  while (base >= endPoint) {
    steps++;
    let stepLength = base;
    let stepWidth = base;
    if (base === endPoint) {
      totalGold += stepLength * stepWidth * increment;
      break;
    }
    let currentStoneQuantity = (stepLength - 2) * (stepWidth - 2) * increment;
    totalStone += currentStoneQuantity;
    if (steps % 5 === 0) {
      totalLapisLazuli += (stepLength * 4 - 4) * increment;
    } else {
      totalMarble += (stepLength * 4 - 4) * increment;
    }
    base -= 2;
  }
  let totalHeight = steps * increment;
  console.log(`Stone required: ${Math.ceil(totalStone)}`);
  console.log(`Marble required: ${Math.ceil(totalMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(totalGold)}`);
  console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}
solve(23, 0.5);
