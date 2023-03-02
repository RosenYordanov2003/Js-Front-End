function charactersInRange(firsChar, secondChar) {
    
  function findBiggerCharacter(firsChar, secondChar) {
    let result1 = firsChar.charCodeAt(0);
    let result2 = secondChar.charCodeAt(0);

    return result1 < result2 ? firsChar : secondChar;
  }
  let start = findBiggerCharacter(firsChar, secondChar);

  let end = start === firsChar ? secondChar : firsChar;

  start = start.charCodeAt(0);
  end = end.charCodeAt(0);

  let array = [];

  for (let index = start+1; index < end; index++) {
    let asciiSymbol = String.fromCharCode(index);
    array.push(asciiSymbol);
  }
  console.log(array.join(" "));
}
charactersInRange("#", ":");
