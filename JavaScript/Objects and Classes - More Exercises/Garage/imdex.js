function garage(array) {
  let garageObject = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let [garageId, carInfo] = element.split(" - ");

    if (!garageObject.hasOwnProperty(garageId)) {
      garageObject[garageId] = [];
    }
    const carTokens = carInfo
      .split(", ")
      .map((x) => x.split(": "));
    const carObject = {};
    for (const [key, value] of carTokens) {
      carObject[key] = value;
    }
    garageObject[garageId].push(carObject);
  }
  print(garageObject);

  function print(garageObject) {
    for (const garageId of Object.keys(garageObject)) {
      console.log(`Garage № ${garageId}`);
      for (const car of garageObject[garageId]) {

        const carInformation = Object.entries(car)
          .map(([key, value]) => `${key} - ${value}`)
          .join(", ");
        console.log(`--- ${carInformation}`);
      }
    }
  }
}

garage([
  "71 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
