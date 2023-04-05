window.addEventListener("load", solve);

function solve() {
 
  const spanElement = document.getElementById('progress-count');
  const clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click',clear);

  let count = 0;

  let inputObject = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    option: document.getElementById('genderSelect'),
    info: document.getElementById('task'),
  }
  const nextButton = document.getElementById('form-btn');
  nextButton.addEventListener('click',submit);

  let currentObject = {};

  function submit(){
    if(Object.values(inputObject).filter((input) => input.value.length < 1).length > 0){
      return;
    }

    const ulElement = document.getElementById('in-progress');
    let liElement = createHTMLElement('li','','each-line','',ulElement);
    let articleElement = createHTMLElement('article','','','',liElement);
    createHTMLElement('h4',`${inputObject['firstName'].value} ${inputObject['lastName'].value}`,'','',articleElement);
    createHTMLElement('p',`${inputObject['option'].options[inputObject['option'].selectedIndex].textContent}, ${inputObject['age'].value}`,'','', articleElement);
    createHTMLElement('p',`Dish description: ${inputObject['info'].value}`,'','',articleElement);
    let editButton = createHTMLElement('button','Edit','edit-btn','',liElement);
    let markButton = createHTMLElement('button','Mark as complete','complete-btn','',articleElement);

   editButton.addEventListener('click',edit);
   markButton.addEventListener('click',complete);

   currentObject = {
    firstName: inputObject['firstName'].value,
    lastName: inputObject['lastName'].value,
    age: inputObject['age'].value,
    info: inputObject['info'].value
   }

    for (const key in inputObject) {
      if(key !== 'option'){
        inputObject[key].value = '';
      }
    }
    spanElement.textContent = ++count;
    
  }

  function edit(event){
   event.target.parentElement.remove();
   for (const key in currentObject) {
     if(inputObject.hasOwnProperty(key)){
      inputObject[key].value = currentObject[key]
     }
   }
   spanElement.textContent = --count;
  }

  function complete(event){
    event.target.parentElement.remove();
    const ulElement = document.getElementById('finished');
    let liElement = createHTMLElement('li','','each-line','',ulElement);
    let articleElement = createHTMLElement('article','','','',liElement);
    createHTMLElement('h4',`${currentObject['firstName']} ${currentObject['lastName']}`,'','',articleElement);
    createHTMLElement('p',`${inputObject['option'].options[inputObject['option'].selectedIndex].textContent}, ${currentObject['age']}`,'','', articleElement);
    createHTMLElement('p',`Dish description: ${currentObject['info']}`,'','',articleElement);
    
    spanElement.textContent = --count;
  }

  function clear(event){
    event.target.parentElement.children[1].innerHTML = '';
  }

  function createHTMLElement(typeOfElement, content, className, id, parentElement){
    const element = document.createElement(typeOfElement);
    if(content){
      element.textContent = content;
    }
    if(className){
      element.classList.add(className);
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
