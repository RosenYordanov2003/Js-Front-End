window.addEventListener("load", solve);

function solve() {
    console.log(document.getElementById("first-name"));
  let inputObject = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    date: document.getElementById("from-date"),
    days: document.getElementById("days-count"),
    peopleCount:document.getElementById('people-count'),
  };
  const ulElement = document.querySelector('.ticket-info-list');
  let currentObject = {};
  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', getInfo);

  function getInfo(event){
    event.preventDefault();

    if(Object.values(inputObject).filter((input)=>input.value.length < 1).length > 0){
      return;
    }
    const liElement = createHTMLElement('li','','ticket',ulElement);
    const articleElement = createHTMLElement('article','','',liElement);
    createHTMLElement('h3',`Name: ${inputObject['firstName'].value} ${inputObject['lastName'].value}`,'',articleElement);
    createHTMLElement('p',`From date: ${inputObject['date'].value}`,'',articleElement);
    createHTMLElement('p',`For ${inputObject['days'].value} days`,'',articleElement);
    createHTMLElement('p',`For ${inputObject['peopleCount'].value} people`,'',articleElement);
    const editButton = createHTMLElement('button','Edit','edit-btn',liElement);
    const continueButton = createHTMLElement('button','Continue','continue-btn',liElement);
    
    editButton.addEventListener('click',edit);
    continueButton.addEventListener('click',nextStep);

    currentObject = {
      firstName:inputObject['firstName'].value,
      lastName: inputObject['lastName'].value,
      date:inputObject['date'].value,
      days:inputObject['days'].value,
      peopleCount:inputObject['peopleCount'].value
    }

    Object.values(inputObject).forEach((input)=>input.value = '');
    event.target.disabled = true;
  }

  function edit(event){
   for (const key in currentObject) {
     inputObject[key].value = currentObject[key];
   }
   event.target.parentElement.remove();
   nextBtn.disabled = false;
  }

  function nextStep(event){
    event.target.parentElement.remove();
    const confirmUlElement = document.querySelector('.confirm-ticket');

    const liElement = createHTMLElement('li','','ticket-content',confirmUlElement);
    const articleElement = createHTMLElement('article','','',liElement);
    createHTMLElement('h3',`Name: ${currentObject['firstName']} ${currentObject['lastName']}`,'',articleElement);
    createHTMLElement('p',`From date: ${currentObject['date']}`,'',articleElement);
    createHTMLElement('p',`For ${currentObject['days']} days`,'',articleElement);
    createHTMLElement('p',`For ${currentObject['peopleCount']} people`,'',articleElement);
    const confirmButton = createHTMLElement('button','Confirm','confirm-btn',liElement);
    const cancelButton = createHTMLElement('button','Cancel','cancel-btn',liElement);

    confirmButton.addEventListener('click',finish);
    cancelButton.addEventListener('click',cancel);
  }

  function cancel(event){
    event.target.parentElement.remove();
    nextBtn.disabled = false;
  }
  function finish(event){
    const divElement = document.getElementById('main');
    divElement.remove();
    const bodyElement = document.getElementById('body');
    createHTMLElement('h1','Thank you, have a nice day!','',bodyElement,'thank-you');
    const backButton = createHTMLElement('button','Back','',bodyElement, 'back-btn');
    backButton.addEventListener('click',reload);
  }

  function reload(){
    location.reload();
  }

  function createHTMLElement(typeOfElement, content, className, parentElement, id){
    const element = document.createElement(typeOfElement);
    if(content){
        element.textContent = content;
    }
    if(className){
        element.classList.add(className);
    }
    if(parentElement){
        parentElement.appendChild(element);
    }
    if(id){
      element.id = id;
    }
    return element;
  }
}
