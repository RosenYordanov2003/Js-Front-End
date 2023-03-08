function addressBook(array) {
  let dictionary = {};
  for (const token of array) {
    let [name, address] = token.split(":");
    dictionary[name] = address;
  }
  let sorted = Object.entries(dictionary);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [key, value] of sorted) {
    console.log(`${key} -> ${value}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
