function solve(array, text) {
  let wordTokens = array.split(", ");
  let textTokens = text.split(" ");
  for (let index = 0; index < wordTokens.length; index++) {
    let currentWord = wordTokens[index];
    for (let z = 0; z < textTokens.length; z++) {
      if (
        textTokens[z].includes("*") &&
        textTokens[z].length == currentWord.length
      ) {
        textTokens[z] = currentWord;
        break;
      }
    }
  }
  console.log(textTokens.join(" "));
}
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
