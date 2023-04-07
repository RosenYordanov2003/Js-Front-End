window.addEventListener('load', solve);

function solve() {
    let inputObject = {
     menu: document.getElementById('type-product'),
     description: document.getElementById('description'),
     clientName : document.getElementById('client-name'),
     clientPhone: document.getElementById('client-phone'),
    };

    const sendButtonElement = document.querySelector('#right button');
    sendButtonElement.addEventListener('click', sendOrder);

    function sendOrder(event){
        event.preventDefault();

        if(Object.values(inputObject).filter((input) => input.value.length < 1).length > 0){
            return;
        }
        const sectionElement = document.getElementById('received-orders');
        const divContainer = createHTMLElement('div', '', ['container'], sectionElement);
        createHTMLElement('h2',`Product type for repair: ${inputObject['menu'].value}`, '', divContainer);
        createHTMLElement('h3', `Client information: ${inputObject['clientName'].value}, ${inputObject['clientPhone'].value}`, '', divContainer);
        createHTMLElement('h4', `Description of the problem: ${inputObject['description'].value}`, '', divContainer);
        const startButton = createHTMLElement('button', 'Start repair', ['start-btn'], divContainer);
        const finishButton = createHTMLElement('button', 'Finish repair', ['finish-btn'], divContainer);
        finishButton.disabled = true;
        
        startButton.addEventListener('click', startRepair);
        finishButton.addEventListener('click', finishRepair);
        Object.values(inputObject).forEach((input) => input.value = '');
    }

    function startRepair(event){
      event.target.disabled = true;
      event.target.parentElement.children[4].disabled = false;
    }
    function finishRepair(event){
     const sectionElement = document.getElementById('completed-orders');
     const divContainer = createHTMLElement('div', '', ['container'], sectionElement);
     createHTMLElement('h2',` ${event.target.parentElement.children[0].textContent}`, '', divContainer);
     createHTMLElement('h3', `${event.target.parentElement.children[1].textContent}`, '', divContainer);
     createHTMLElement('h4', `${event.target.parentElement.children[2].textContent}`, '', divContainer);
     
     const clearButton = document.querySelector('.clear-btn');
     clearButton.addEventListener('click', clear);
     event.target.parentElement.remove();
    }

    function clear(event){
     let index = 3;
     let counter = 0;
     const totalChildrenCount = event.target.parentElement.children.length;
     while(counter < totalChildrenCount){
        event.target.parentElement.children[index].remove();
        counter++;
     }     
    }

    function createHTMLElement(typeOfElement, content, classArray, parentElement){
        const element = document.createElement(typeOfElement);
        if(content){
            element.textContent = content;
        }
        if(classArray){
            classArray.forEach(className => {
                element.classList.add(className);
            });
        }
        if(parentElement){
            parentElement.appendChild(element);
        }
        return element;
    }
}