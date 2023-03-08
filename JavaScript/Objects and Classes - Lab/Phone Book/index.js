function phoneBook(array) {
  let dictionary = {};
  for (const token of array) {
    let [name, phone] = token.split(" ");
    dictionary[name] = phone;
  }

  const entries = Object.entries(dictionary);
  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
