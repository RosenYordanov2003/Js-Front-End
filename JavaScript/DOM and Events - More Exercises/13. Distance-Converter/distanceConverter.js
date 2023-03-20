function attachEventsListeners() {
  const meterObject = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };
  const inputMenuElement = document.getElementById("inputUnits");
  const buttonElement = document.getElementById("convert");
  const inputDistance = document.getElementById("inputDistance");
  buttonElement.addEventListener("click", convert);

  function convert() {
    const inputIndex = inputMenuElement.selectedIndex;
    const selectedInputOption = inputMenuElement.options[inputIndex].value;
    const outputMenuElement = document.getElementById("outputUnits");
    const outPutIndex = outputMenuElement.selectedIndex;
    const selectedOutputOption = outputMenuElement.options[outPutIndex].value;

    let valueInMeters = Number(inputDistance.value) * meterObject[selectedInputOption];
    let outPutValue = valueInMeters/= meterObject[selectedOutputOption];

    const outputElement = document.getElementById('outputDistance');
    outputElement.value = outPutValue;
  }
}
