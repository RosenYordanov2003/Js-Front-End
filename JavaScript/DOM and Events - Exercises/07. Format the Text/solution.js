function solve() {
  const inputText = document.getElementById("input").value;
  const outputElement = document.getElementById("output");
  let sentences = inputText.split(".");
  sentences.pop();
  console.log(sentences);
  while (sentences.length > 0) {
    const paragraphElement = document.createElement("p");
    let currentSentences = sentences.splice(0, 3).map((x) => x.trimStart());
    paragraphElement.textContent = currentSentences.join(".") + ".";
    outputElement.appendChild(paragraphElement);
  }
}
