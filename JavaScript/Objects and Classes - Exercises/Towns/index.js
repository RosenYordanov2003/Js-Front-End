function towns(array) {
 array.map((line)=>line.split(' | '))
 .map(([town, latitude, longitude])=>({town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)}))
 .forEach(town => {
   console.log(town);  
 });
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
