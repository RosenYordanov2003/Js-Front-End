function piccolo(array) {
  let parking = {};

  for (let index = 0; index < array.length; index++) {
    const line = array[index].split(", ");
    if (line[0] === "IN") {
      parking[line[1]] = "IN";
    } else {
      if (parking.hasOwnProperty(line[1])) {
        delete parking[line[1]];
      }
    }
  }
  const keys = Object.keys(parking);
  keys.length> 0 ?keys.sort((a,b)=>a[0].localeCompare(b[0]))
  .forEach((key)=>console.log(key)) : console.log('Parking Lot is Empty');
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
