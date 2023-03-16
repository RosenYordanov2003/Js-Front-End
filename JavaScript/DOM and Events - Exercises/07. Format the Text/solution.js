function solve() {
  const inputText = document.getElementById('input').value;
  const filtered = inputText.split('.').filter(sentence => sentence.trim().length > 0);
  const outputElement = document.getElementById("output");

  if (filtered.length < 3) {
    let result = filtered.join(".");
    outputElement.innerHTML = `<p>${result}</p>`;
  } else {
    let output = "";
  
    for (let index = 0; index < filtered.length; index++) {
      output += `${filtered[index]}.`;
      if ((index + 1) % 3 === 0) {
        outputElement.innerHTML += `<p>${output}</p>`;
        output = "";
      }
    }
    let remainder = filtered.length % 3;
    if (remainder !== 0) {
      let remainderOutput = "";
      for (let index = filtered.length - remainder;index < filtered.length;index++ ) {
        remainderOutput += filtered[index] + ".";
      }
      outputElement.innerHTML += `<p>${remainderOutput}</p>`;
    }
  }
}
