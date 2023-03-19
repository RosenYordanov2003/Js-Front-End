function solve() {
  const inputNumber = document.getElementById('input');
  const selectMenuElement = document.getElementById('selectMenuTo');
  const binaryOptionElement = document.createElement('option');
  const buttonElement = document.querySelector("button");
  const outputElement = document.getElementById('result');

  buttonElement.addEventListener('click',convertNumber);
  binaryOptionElement.value = 'binary';
  binaryOptionElement.text = 'Binary';
  const hexaDecimalElement = document.createElement('option');
  hexaDecimalElement.value = 'hexadecimal';
  hexaDecimalElement.text = 'Hexadecimal';
  selectMenuElement.appendChild(binaryOptionElement);
  selectMenuElement.appendChild(hexaDecimalElement);
  
  function convertNumber(){

    const selectedIndex = selectMenuElement.selectedIndex;
    const selectedOption = selectMenuElement.options[selectedIndex].value;
    let number = Number(inputNumber.value);
    if(selectedOption==='binary'){
        let result = number.toString(2);
        outputElement.value = result;
    }
    else{
        let result = number.toString(16);
        outputElement.value = result.toUpperCase();
    }
  }
}