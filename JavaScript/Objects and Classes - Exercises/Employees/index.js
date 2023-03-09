function employees(array) {
  let employeesObject = {};

  for (let index = 0; index < array.length; index++) {
    employeesObject[array[index]] = array[index].length;
  }

  const entries = Object.entries(employeesObject);
  for (const [key, value] of entries) {
    console.log(`Name: ${key} -- Personal Number: ${value}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
