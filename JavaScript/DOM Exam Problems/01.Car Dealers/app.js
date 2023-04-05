window.addEventListener("load", solve);

function solve() {
  let totalSum = 0;
  let inputObject = {
    make: document.getElementById("make"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    fuelType: document.getElementById("fuel"),
    originalPrice: document.getElementById("original-cost"),
    sellingPrice: document.getElementById("selling-price"),
  };
 
  let currentObject = {};

  const publishButton = document.getElementById("publish");
  publishButton.addEventListener('click',publish);

  function publish(event){
    event.preventDefault();
    
    if(Object.values(inputObject).filter((input) => input.value.length < 1).length > 0){
        return;
    }
    if(Number(inputObject['originalPrice'].value) >= Number(inputObject['sellingPrice'].value)){
        return;
    }
    const tableBodyElement = document.getElementById('table-body');
    let tableRow = createHTMLElement('tr','',['row'],'',tableBodyElement);
    createHTMLElement('td',inputObject['make'].value,'','',tableRow);
    createHTMLElement('td',inputObject['model'].value,'','',tableRow);
    createHTMLElement('td',inputObject['year'].value,'','',tableRow);
    createHTMLElement('td',inputObject['fuelType'].options[inputObject['fuelType'].selectedIndex].value,'','',tableRow);
    createHTMLElement('td',inputObject['originalPrice'].value,'','',tableRow);
    createHTMLElement('td',inputObject['sellingPrice'].value,'','',tableRow);
    let tdContainer = createHTMLElement('td','','','',tableRow);
    
    let editButton = createHTMLElement('button','Edit',['action-btn', 'edit'],'',tdContainer);
    let sellButton = createHTMLElement('button','Sell',['action-btn','sell'], '', tdContainer);
    
    editButton.addEventListener('click',edit);
    sellButton.addEventListener('click',sell);

    currentObject = {
     make: inputObject['make'].value,
     model: inputObject['model'].value,
     year: inputObject['year'].value,
     fuelType: inputObject['fuelType'].value,
     originalPrice: inputObject['originalPrice'].value,
     sellingPrice: inputObject['sellingPrice'].value,
    };
    
    Object.values(inputObject).forEach((input) => input.value = '');
  }

  function edit(event){
    event.target.parentElement.parentElement.remove();

    for (const key in currentObject) {
      inputObject[key].value = currentObject[key];
    }
  }

  function sell(event){

    let currentProfit = Number(event.target.parentElement.parentElement.children[5].textContent) - Number(event.target.parentElement.parentElement.children[4].textContent);
    const ulElement = document.getElementById('cars-list');
    let liElement = createHTMLElement('li','',['each-list'],'',ulElement);
    createHTMLElement('span',`${event.target.parentElement.parentElement.children[0].textContent} ${event.target.parentElement.parentElement.children[1].textContent}`,'', '', liElement);
    createHTMLElement('span', event.target.parentElement.parentElement.children[2].textContent,'', '', liElement);
    createHTMLElement('span',currentProfit,'', '', liElement);
    totalSum+=currentProfit;
    let strongElement = document.getElementById('profit');
    strongElement.textContent = totalSum.toFixed(2);
    event.target.parentElement.parentElement.remove();
  }

  function createHTMLElement(typeOfElement, content, classList, id, parentElement){
    const element = document.createElement(typeOfElement);
    if(content){
        element.textContent = content;
    }
    if(classList){
        classList.forEach(className => {
            element.classList.add(className);
        });
    }
    if(id){
        element.id = id;
    }
    if(parentElement){
        parentElement.appendChild(element);
    }
    return element;
  }
}
