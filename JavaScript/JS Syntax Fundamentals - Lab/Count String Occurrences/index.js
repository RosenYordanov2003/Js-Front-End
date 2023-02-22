function solve(text, wordToFind) {
  let textArray = text.split(" ");
  let wordCountOccurrences = 0;
  for (const word of textArray) {
    if (word === wordToFind) {
      wordCountOccurrences++;
    }
  }
  console.log(wordCountOccurrences);
}
solve("This is a word and it also is a sentence", "is");
