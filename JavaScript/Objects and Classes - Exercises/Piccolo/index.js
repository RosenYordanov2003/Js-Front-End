function piccolo(array) {
  let parkingSet = new Set();

  for (let index = 0; index < array.length; index++) {
    const line = array[index].split(", ");
    if (line[0] === "IN") {
     parkingSet.add(line[1]);
    } else {
      if (parkingSet.has(line[1])) {
           parkingSet.delete(line[1]);
      }
    }
  }
 let sorted = [...parkingSet.keys()].sort((a,b)=>a.localeCompare(b));
 sorted.length>0?sorted.forEach((x)=>console.log(x)):console.log('Parking Lot is Empty');
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
