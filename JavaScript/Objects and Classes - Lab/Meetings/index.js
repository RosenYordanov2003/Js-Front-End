function meetings(array) {
  let dictionary = {};
  for (const token of array) {
    let [day, name] = token.split(" ");
    if (!dictionary.hasOwnProperty(day)) {
      console.log(`Scheduled for ${day}`);
      dictionary[day] = name;
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  const entries = Object.entries(dictionary);
  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
