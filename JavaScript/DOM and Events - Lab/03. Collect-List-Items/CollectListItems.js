function extractText() {
  let listElements = document.querySelectorAll("#items li");
  let listElementsAsArray = Array.from(listElements);
  let textAreaElement = document.getElementById("result");
  listElementsAsArray.forEach((element, index) => {
    index !== listElementsAsArray.length - 1
      ? (textAreaElement.textContent += `${element.textContent}\r\n`)
      : (textAreaElement.textContent += element.textContent);
  });
}
