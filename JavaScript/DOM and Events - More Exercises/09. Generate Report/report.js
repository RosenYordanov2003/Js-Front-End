function generateReport() {
  let outputArray = [];
  let globalObject = {};
  const inputElements = document.querySelectorAll("thead tr th input:checked");
  Array.from(inputElements).forEach((checkbox) => {
    const index = Array.from(checkbox.parentNode.parentNode.children).indexOf(checkbox.parentNode);
    const tdElements = Array.from(document.querySelectorAll(`tbody tr td:nth-child(${index + 1})`));
    const checkboxName = checkbox.name;
    tdElements.forEach((td, index) => {
      if(!globalObject.hasOwnProperty(index)){
        globalObject[index] = {};
      }
      globalObject[index][checkboxName] = td.textContent;
    });
  });
 const objectValues = Object.values(globalObject);
 for (let index = 0; index < objectValues.length; index++) {
   outputArray.push(objectValues[index]);
 }
 const outputTextArealElement = document.getElementById('output');
 outputTextArealElement.textContent = JSON.stringify(outputArray);
}
