function solve() {
    let inputObject = {
        recipientName: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        content: document.getElementById('message'),
    };

    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');

    addButton.addEventListener('click',add);
    resetButton.addEventListener('click', reset);

    function add(event){
        event.preventDefault();
        if(Object.values(inputObject).filter((input) => input.value.length < 1).length > 0){
            return;
        }
        const ulElement = document.getElementById('list');
        let liElement = createHTMLElement('li', '', '', '', '', ulElement);
        createHTMLElement('h4', '', `Title: ${inputObject['title'].value}`, '', '', liElement);
        createHTMLElement('h4', '', `Recipient Name: ${inputObject['recipientName'].value}`, '', '',liElement);
        createHTMLElement('span', '' ,inputObject['content'].value, '', '', liElement);
        let divContainer = createHTMLElement('div', '', '', '', 'list-action', liElement);
        const sendButton = createHTMLElement('button', 'submit', 'Send', '', 'send', divContainer);
        const deleteButton = createHTMLElement('button', 'submit', 'Delete', '', 'delete', divContainer);

        sendButton.addEventListener('click', send);
        deleteButton.addEventListener('click', deleteMessage);

        reset();
    }

    function reset(event){
        if(event){
            event.preventDefault();
        }
        Object.values(inputObject).forEach((input) => input.value = '');
    }

    function send(event){
        let titleText = event.target.parentElement.parentElement.children[0].textContent;
        let recipientNameText = event.target.parentElement.parentElement.children[1].textContent;
        let recipientName = recipientNameText.substring(recipientNameText.indexOf(':') + 2);
        let title = titleText.substring(titleText.indexOf(':') + 1);

        const ulElement = document.querySelector('.sent-list');
        let liElement = createHTMLElement('li','', '', '', '', ulElement);
        createHTMLElement('span', '', `To: ${recipientName}`, '', '', liElement);
        createHTMLElement('span', '', `Title: ${title}`, '', '', liElement);
        let divContainer = createHTMLElement('div', '', '', ['btn'], '', liElement);
        let deleteBtn = event.target.parentElement.children[1];
        deleteBtn.className = 'delete';
        deleteBtn.removeAttribute('id');
        divContainer.appendChild(deleteBtn);
        event.target.parentElement.parentElement.remove();
    }

    function deleteMessage(event){
        let titleText = '';
        let recipientNameText = '';
        if(event.target.parentElement.parentElement.children.length >3){
        titleText = event.target.parentElement.parentElement.children[0].textContent;
        recipientNameText = event.target.parentElement.parentElement.children[1].textContent;
        }
        else{
            titleText = event.target.parentElement.parentElement.children[1].textContent;
            recipientNameText =  event.target.parentElement.parentElement.children[0].textContent
        }
        let recipientName = recipientNameText.substring(recipientNameText.indexOf(':') + 2);
        let title = titleText.substring(titleText.indexOf(':') + 2);
        const ulElement = document.querySelector('.delete-list');
        let liElement = createHTMLElement('li', '', '', '', '', ulElement);
        createHTMLElement('span', '', `To: ${recipientName}`, '', '', liElement);
        createHTMLElement('span', '', `Title: ${title}`, '', '', liElement);
        
        event.target.parentElement.parentElement.remove();
    }

    function createHTMLElement(typeOfElement, type, content, classArray, id, parentElement){
        const element = document.createElement(typeOfElement);
        if(content){
            element.textContent = content;
        }
        if(type){
            element.type = type;
        }
        if(classArray){
            classArray.forEach(className => {
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
solve()