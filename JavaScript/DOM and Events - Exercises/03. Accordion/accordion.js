function toggle() {
    
  const buttonElement = document.querySelector("#accordion div .button");
  const contentElement = document.getElementById("extra");

  buttonElement.textContent === "More" ? show() : hide();

  function show() {
    contentElement.style.display = "block";
    buttonElement.textContent = "Less";
  }
  function hide() {
    contentElement.style.display = "none";
    buttonElement.textContent = "More";
  }
}
