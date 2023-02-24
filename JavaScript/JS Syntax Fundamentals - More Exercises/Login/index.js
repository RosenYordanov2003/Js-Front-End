function solve(array) {
  let passwordToReverse = array[0];
  let reversedPassword = "";
  for (let index = passwordToReverse.length - 1; index >= 0; index--) {
    reversedPassword += passwordToReverse[index];
  }
  let countWrongPasswords = 0;
  for (let index = 1; index < array.length; index++) {
    if (array[index] === reversedPassword) {
      console.log(`User ${passwordToReverse} logged in.`);
      break;
    } else {
      countWrongPasswords++;
      if (countWrongPasswords % 4 === 0 && countWrongPasswords !== 0) {
        console.log(`User ${passwordToReverse} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
