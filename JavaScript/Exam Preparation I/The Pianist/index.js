function solve(array) {
  let pieceObject = {};
  let arrayIndex = 1;
  for (let index = 1; index <= array[0]; index++) {
    const [piece, composer, key] = array[index].split("|");
    if (!pieceObject.hasOwnProperty(piece)) {
      pieceObject[piece] = { composer, key };
      arrayIndex++;
    }
  }
  while (true) {
    let command = array[arrayIndex];
    if (command === "Stop") {
      break;
    }
    const tokens = command.split("|");
    const action = tokens[0];
    if (action === "Add") {
      if (pieceObject.hasOwnProperty(tokens[1])) {
        console.log(`${tokens[1]} is already in the collection!`);
      } else {
        const composer = tokens[2];
        const key = tokens[3];
        pieceObject[tokens[1]] = { composer, key };
        console.log(`${tokens[1]} by ${composer} in ${key} added to the collection!`);
      }
    } else if (action === "Remove") {
      if (pieceObject.hasOwnProperty(tokens[1])) {
        delete pieceObject[tokens[1]];
        console.log(`Successfully removed ${tokens[1]}!`);
      }
      else{
        console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
      }
    }
    else{
        if(pieceObject.hasOwnProperty(tokens[1])){
            pieceObject[tokens[1]].key = tokens[2];
            console.log(`Changed the key of ${tokens[1]} to ${tokens[2]}!`);
        }
        else{
            console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
        }
    }
    arrayIndex++;
  }
  printResult();


  function printResult(){
    for (const key in pieceObject) {
       console.log(`${key} -> Composer: ${pieceObject[key].composer}, Key: ${pieceObject[key].key}`);
    }
  }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
