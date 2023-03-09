function makeADictionary(array) {
  let termObject = {};

  for (let index = 0; index < array.length; index++) {
    const result = JSON.parse(array[index]);
    let keys = Object.keys(result);
    termObject[keys[0]] = Object.values(result)[0];
  }
  const entries = Object.entries(termObject).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (const [key, value] of entries) {
    console.log(`Term: ${key} => Definition: ${value}`);
  }
}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
