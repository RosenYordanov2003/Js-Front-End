function printDna(n) {
  const isValid = (word, firstIndex, secondIndex) => {
    return firstIndex < word.length && secondIndex < word.length;
  };

  const word = "ATCGTTAGGG";

  let outputArray = [];

  let wordIndex = 0;

  for (let index = 0; index < n; index++) {
    if (index % 4 == 0) {
      if (isValid(word, wordIndex, wordIndex + 1)) {
        outputArray.push(`**${word[wordIndex]}${word[wordIndex + 1]}**`);
        wordIndex += 2;
      } else {
        wordIndex = 0;
        outputArray.push(`**${word[wordIndex]}${word[wordIndex + 1]}**`);
        wordIndex += 2;
      }
    } else if (index % 2 !== 0) {
      if (isValid(word, wordIndex, wordIndex + 1)) {
        outputArray.push(`*${word[wordIndex]}--${word[wordIndex + 1]}*`);
        wordIndex += 2;
      } else {
        wordIndex = 0;
        outputArray.push(`*${word[wordIndex]}--${word[wordIndex + 1]}*`);
        wordIndex += 2;
      }
    } else if (index % 2 === 0) {
      if (isValid(word, wordIndex, wordIndex + 1)) {
        outputArray.push(`${word[wordIndex]}----${word[wordIndex + 1]}`);
        wordIndex += 2;
      } else {
        wordIndex = 0;
        outputArray.push(`${word[wordIndex]}----${word[wordIndex + 1]}`);
        wordIndex += 2;
      }
    }
  }
  console.log(outputArray.join("\r\n"));
}
printDna(10);
