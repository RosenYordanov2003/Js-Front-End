function sovle(array, countRotations) {
  for (let index = 0; index < countRotations; index++) {
   let firstElement = array.shift();
   array.push(firstElement);
  }
  console.log(array.join(' '));
}
sovle([32, 21, 61, 1], 4);
