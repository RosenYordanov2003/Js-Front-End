function solve() {
  const inputTextElement = document.getElementById("text");
  const caseToTransform = document.getElementById("naming-convention");
  const resultElement = document.getElementById("result");

  let text = inputTextElement.value.toLowerCase();
  const caseValue = caseToTransform.value;
 
  if (caseValue === "Pascal Case") {
    let result = text
      .split(" ")
      .map((word) => {
        const firstChar = word[0].toUpperCase();
        const remainingLetters = word.slice(1);
        return `${firstChar}${remainingLetters}`;
      })
      .join("");

    resultElement.textContent = result;
  } else if (caseValue === "Camel Case") {
    let result = text.split(" ").map((word, index) => {
      let firstChar = word[0];
      if (index !== 0) {
        firstChar = word[0].toUpperCase();
      }
      const remainingLetters = word.slice(1);
      return `${firstChar}${remainingLetters}`;
    }).join('');
    resultElement.textContent = result;
  } else {
    resultElement.textContent = "Error!";
  }
}
