window.addEventListener('load', solve);

function solve() {

  let totalPrice = 0;

   let inputObject = {
     model: document.getElementById('model'),
     year: document.getElementById('year'),
     description: document.getElementById('description'),
     price: document.getElementById('price'),
   };
   const addButtonElement = document.getElementById('add');
   addButtonElement.addEventListener('click', add);

   function add(event){
    event.preventDefault();
    if(Object.values(inputObject).filter((input) => input.value.length < 1).length > 0){
        console.log('true');
        return;
    }
    if(Number(inputObject['price'].value) < 0 || Number(inputObject['year'].value) < 0){
        return;
    }
    const tbodyElement = document.getElementById('furniture-list');
    const tableRowElement = createHTMLElement('tr', '', ['info'], '', tbodyElement);
    createHTMLElement('td', inputObject['model'].value, '', '', tableRowElement);
    createHTMLElement('td', Number(inputObject['price'].value).toFixed(2), '', '', tableRowElement);
    const tdButtonContainer = createHTMLElement('td', '', '', '', tableRowElement);
    const moreBtn = createHTMLElement('button', 'More Info', ['moreBtn'], '', tdButtonContainer);
    const buyButton = createHTMLElement('button', 'Buy it', ['buyBtn'], '', tdButtonContainer);

    const hideTableRowElement = createHTMLElement('tr', '', ['hide'], '', tbodyElement);
    createHTMLElement('td', `Year: ${inputObject['year'].value}`, '', '', hideTableRowElement);
    createHTMLElement('td', `Description: ${inputObject['description'].value}`, '', {colSpan: 3}, hideTableRowElement);

    moreBtn.addEventListener('click', showMore);
    buyButton.addEventListener('click', buyFurniture);

    Object.values(inputObject).forEach((input) => input.value = '');
   }

   function showMore(event){
    if(event.target.textContent === 'More Info'){
    event.target.textContent = 'Less Info';
    document.querySelector('.hide').style.display = 'contents';
    }
    else{
    event.target.textContent = 'More Info';
    document.querySelector('.hide').style.display = 'none';
    }
   }

   function buyFurniture(event){
      totalPrice +=  Number(event.target.parentElement.parentElement.children[1].textContent);
      document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
      event.target.parentElement.parentElement.remove();
   }

   function createHTMLElement(typeOfElement, content, classArray, attributes, parentElement){
    const element = document.createElement(typeOfElement);
    if(content){
        element.textContent = content;
    }
    if(classArray){
        classArray.forEach(className => {
            element.classList.add(className);
        });
    }
    if(attributes){
        for (const key in attributes) {
           element.setAttribute(key, attributes[key]);
        }
    }
    if(parentElement){
        parentElement.appendChild(element);
    }
    return element;
   }
}
