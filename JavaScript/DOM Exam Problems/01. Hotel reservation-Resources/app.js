window.addEventListener("load", solve);

function solve() {
    let inputObject = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count'),
    }
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click',nextStep);

    let currentObject = {};

    function nextStep(event){

        event.preventDefault();

        if(Object.values(inputObject).filter((input) => input.value.length < 1).length > 0){
            return;
        }
        let firstDate = new Date(inputObject['dateIn'].value);
        let secondDate = new Date(inputObject['dateOut'].value);

        if(firstDate.getTime() >= secondDate.getTime()){
            return;
        }

        const ulInfoElement = document.querySelector('.info-list');
        let liElement = createHTMLElement('li','','reservation-content','',ulInfoElement);
        let articleElement = createHTMLElement('article','','','',liElement);
        createHTMLElement('h3',`Name: ${inputObject['firstName'].value} ${inputObject['lastName'].value}`,'','',articleElement);
        createHTMLElement('p',`From date: ${inputObject['dateIn'].value}`,'','',articleElement);
        createHTMLElement('p',`To date: ${inputObject['dateOut'].value}`,'','',articleElement);
        createHTMLElement('p',`For ${inputObject['peopleCount'].value} people`,'','',articleElement);
        let editButton = createHTMLElement('button','Edit','edit-btn','',liElement);
        let continueButton = createHTMLElement('button','Continue','continue-btn','',liElement);

        continueButton.addEventListener('click', next)
        editButton.addEventListener('click',edit);

        event.target.disabled = true;

        currentObject = {
            firstName: inputObject['firstName'].value,
            lastName: inputObject['lastName'].value,
            dateIn: inputObject['dateIn'].value,
            dateOut: inputObject['dateOut'].value,
            peopleCount: inputObject['peopleCount'].value,
        }
        Object.values(inputObject).forEach(input => input.value = '');
    }

    function edit(event){
        for (const key in currentObject) {
           inputObject[key].value = currentObject[key];
        }
        event.target.parentElement.remove();
        nextButton.disabled = false;
    }

    function next(event){
        event.target.parentElement.remove();

        const ulConfirmElement = document.querySelector('.confirm-list');
        let liElement = createHTMLElement('li','','reservation-content','',ulConfirmElement);
        let articleElement = createHTMLElement('article','','','',liElement);
        createHTMLElement('h3',`Name: ${currentObject['firstName']} ${currentObject['lastName']}`,'','',articleElement);
        createHTMLElement('p',`From date: ${currentObject['dateIn']}`,'','',articleElement);
        createHTMLElement('p',`To date: ${currentObject['dateOut']}`,'','',articleElement);
        createHTMLElement('p',`For ${currentObject['peopleCount']} people`,'','',articleElement);
        let confirmButton = createHTMLElement('button','Confirm','confirm-btn','',liElement);
        let cancelButton = createHTMLElement('button','Cancel','cancel-btn','',liElement);

        confirmButton.addEventListener('click',confirmReservation);
        cancelButton.addEventListener('click',cancel);
    }
    
    function confirmReservation(event){
        event.target.parentElement.remove();
        nextButton.disabled = false;
        let h1Element = document.getElementById('verification');
        h1Element.classList.add('reservation-confirmed');
        h1Element.textContent = 'Confirmed.';
    }

    function cancel(event){
        event.target.parentElement.remove();
        nextButton.disabled = false;

        let h1Element = document.getElementById('verification');
        h1Element.classList.add('reservation-cancelled');
        h1Element.textContent = 'Cancelled.';
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
