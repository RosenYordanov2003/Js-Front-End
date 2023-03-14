function calc() {
   let numberOneElement = document.getElementById('num1').value;;
   let numberTwoElement = document.getElementById('num2').value;
   let result = Number(numberOneElement) + Number(numberTwoElement);
   let resultFieldElement = document.getElementById('sum');
   resultFieldElement.value = result;
}
