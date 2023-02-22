function solve(wordToFind, text) {
  text = text.toLowerCase();
  let textTokens = text.split(" ");
  let isContaining = textTokens.includes(wordToFind);
  if (!isContaining) {
    console.log(`${wordToFind} not found!`);
  } else {
    console.log(wordToFind);
  }
}
solve("python", "JavaScript is the best programming language");
