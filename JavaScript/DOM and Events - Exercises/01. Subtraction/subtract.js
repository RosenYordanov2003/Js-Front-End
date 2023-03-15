function subtract() {
   const firstInputElement = document.getElementById('firstNumber');
   const secondInputElement = document.getElementById('secondNumber');

   let result = Number(firstInputElement.value) - Number(secondInputElement.value);

   const resultElement = document.getElementById('result');
   resultElement.textContent= result;
}