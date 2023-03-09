function towns(array) {
  class Town {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = latitude;
      this.longitude = longitude;
    }
    tostring(){
      return `{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`;
    }
  }
  let towns = [];
  for (let index = 0; index < array.length; index++) {
    let [townName, latitudeValue, longitudeValue] = array[index].split("|");
    townName = townName.trim();
    latitudeValue = Number(latitudeValue).toFixed(2);
    longitudeValue = Number(longitudeValue).toFixed(2);
    let currentTown = new Town(townName, latitudeValue, longitudeValue);
    towns.push(currentTown);
  }
  
  towns.forEach((town) => {
    console.log(town.tostring());
  });
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
