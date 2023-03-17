function attachGradientEvents() {
  const gradientElement = document.getElementById("gradient");
  gradientElement.addEventListener("mousemove", calculatePercentages);

  function calculatePercentages(e) {
    let value = 300;
    let clientClickCoordinate = e.offsetX;
    let result = Math.floor((clientClickCoordinate / value) * 100);
    const divElement = document.getElementById("result");
    divElement.textContent = `${result}%`;
  }
}
