function solve() {
  let correctAnswersObject = {
    1: "onclick",
    2: "JSON.stringify()",
    3: "A programming API for HTML and XML documents",
  };
  let currentIndex = 0;
  let countCorrectAnswers = 0;
  const sectionElements = Array.from(document.querySelectorAll("section"));
  const h1ResultElement = document.querySelector("#results h1");
  Array.from(document.querySelectorAll(".answer-text")).forEach((element) => {
    element.addEventListener("click", check);
  });

  function check(e) {
    const section =
      e.target.parentElement.parentElement.parentElement.parentElement;
    const index = Array.from(section.parentElement.children).indexOf(section);
    if (e.target.textContent.trim() === correctAnswersObject[index]) {
      countCorrectAnswers++;
    }
    section.style.display = "none";
    currentIndex++;
    if (currentIndex < sectionElements.length) {
      sectionElements[currentIndex].style.display = "block";
    } else {
      document.querySelector("#results").style.display = "block";
      if (countCorrectAnswers === sectionElements.length) {
        h1ResultElement.textContent =
          "You are recognized as top JavaScript fan!";
      } else {
        h1ResultElement.textContent = `You have ${countCorrectAnswers} right answers`;
      }
    }
  }
}
