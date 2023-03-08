function printProperties(city) {
  let entries = Object.entries(city);
  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
printProperties({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
