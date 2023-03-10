function employees(array) {
  Object.entries(
    array.reduce((data, employee) => {
      data[employee] = employee.length;
      return data;
    }, {})
  ).forEach(([key, value]) =>
    console.log(`Name: ${key} -- Personal Number: ${value}`)
  );
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
