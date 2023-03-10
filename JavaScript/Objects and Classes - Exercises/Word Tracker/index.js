function wordTracker(array) {
  const wordsArray = array[0].split(" ");

  let wordObject = {};
  wordsArray.forEach((word) => {
    wordObject[word] = 0;
  });
  for (let index = 1; index < array.length; index++) {
    if (wordObject.hasOwnProperty(array[index])) {
      wordObject[array[index]]++;
    }
  }
  const entries = Object.entries(wordObject).sort(
    (first, second) => second[1] - first[1]
  );
  for (const [key, value] of entries) {
    console.log(`${key} - ${value}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
