function flightSchedule(array) {
  let airportObject = {};
  let firstArray = array[0];
  for (let index = 0; index < firstArray.length; index++) {
    const tokens = firstArray[index].split(' ');
    const flyNumber = tokens[0];
    const destination = tokens.slice(1).join(' ');
    airportObject[flyNumber] = { Destination:destination, Status: "Ready to fly" };
  }
  let secondArray = array[1];
  for (let index = 0; index < secondArray.length; index++) {
    const [flyNumber, status] = secondArray[index].split(" ");
    if (status === "Cancelled" && airportObject.hasOwnProperty(flyNumber)) {
      airportObject[flyNumber].Status = status;
    }
  }
  const status = array[2].join(' ');

  const filteredAirport = Object.keys(airportObject).filter(key=>airportObject[key].Status===status);
  
  for (let index = 0; index < filteredAirport.length; index++) {
    console.log(airportObject[filteredAirport[index]]);
  }
}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
