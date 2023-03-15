function create(words) {
  const contentElement = document.getElementById("content");

  words.forEach((word) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = word;
    paragraphElement.style.display = "none";
    const divElement = document.createElement("div");
    divElement.appendChild(paragraphElement);
    divElement.addEventListener('click',show);
    contentElement.appendChild(divElement);
  });
  function show(e) {
    e.target.childNodes[0].style.display = "block";
  }
}
