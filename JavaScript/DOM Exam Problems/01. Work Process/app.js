function solve() {
  let totalSalary = 0;
  let inputObject = {
    firstName: document.getElementById("fname"),
    lastName: document.getElementById("lname"),
    email: document.getElementById("email"),
    birthDate: document.getElementById("birth"),
    position: document.getElementById("position"),
    salary: document.getElementById("salary"),
  };
  const hireButton = document.getElementById("add-worker");
  const budgetElement = document.getElementById('sum');
  hireButton.addEventListener("click", hire);

  function hire(event) {
    event.preventDefault();

    if (
      Object.values(inputObject).filter((input) => input.value.length < 1)
        .length > 0
    ) {
      return;
    }
    debugger;
    totalSalary += Number(inputObject["salary"].value);
    const tbodyElement = document.getElementById("tbody");
    let tableRowElement = createHTMLElement("tr", "", "", tbodyElement);
    createHTMLElement(
      "td",
      inputObject["firstName"].value,
      "",
      tableRowElement
    );
    createHTMLElement("td", inputObject["lastName"].value, "", tableRowElement);
    createHTMLElement("td", inputObject["email"].value, "", tableRowElement);
    createHTMLElement(
      "td",
      inputObject["birthDate"].value,
      "",
      tableRowElement
    );
    createHTMLElement("td", inputObject["position"].value, "", tableRowElement);
    createHTMLElement("td", inputObject["salary"].value, "", tableRowElement);
    let tdContainer = createHTMLElement("td", "", "", tableRowElement);
    const firedButton = createHTMLElement(
      "button",
      "Fired",
      ["fired"],
      tdContainer
    );
    const editButton = createHTMLElement(
      "button",
      "Edit",
      ["edit"],
      tdContainer);
    firedButton.addEventListener('click', fireWorker);
    editButton.addEventListener('click', edit);
    Object.values(inputObject).forEach((input) => (input.value = ""));
    budgetElement.textContent = totalSalary.toFixed(2);
  }

  function edit(event){
    
   totalSalary-= Number(event.target.parentElement.parentElement.children[5].textContent); 
   const keys = Object.keys(inputObject);
   for (let index = 0; index < keys.length; index++) {
     inputObject[keys[index]].value = event.target.parentElement.parentElement.children[index].textContent;
   }
   event.target.parentElement.parentElement.remove();
   budgetElement.textContent = totalSalary.toFixed(2);
  }

  function fireWorker(event){
    totalSalary-= Number(event.target.parentElement.parentElement.children[5].textContent); 
    event.target.parentElement.parentElement.remove();
    budgetElement.textContent = totalSalary.toFixed(2);
  }

  function createHTMLElement(
    typeOfElement,
    content,
    classArray,
    parentElement
  ) {
    const element = document.createElement(typeOfElement);
    if (content) {
      element.textContent = content;
    }
    if (classArray) {
      classArray.forEach((className) => {
        element.classList.add(className);
      });
    }
    if (parentElement) {
      parentElement.appendChild(element);
    }
    return element;
  }
}
solve();
