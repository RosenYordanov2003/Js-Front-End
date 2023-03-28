window.addEventListener("load", solve);

function solve() {
  const inputElements = Array.from(document.querySelectorAll(".inner-wrap input"));
  const buttonElement = document.getElementById('form-btn');
  const ulElement = document.getElementById('preview-list');
  const selectMenuElement = document.getElementById('genre');
  const textAreaElement = document.getElementById('story');
  buttonElement.addEventListener('click',publish)
  const mainDivElement = document.getElementById('main');

  function publish(event){
    if (inputElements.filter((input) => input.value.length < 1).length > 0 ||textAreaElement.value.length < 1) {
      textAreaElement.value = '';
      inputElements.forEach((input)=>input.value="");
      return;
    }
    
    const [firstNameInput, lastNameInput, ageInput, storyTitleInput] = inputElements;
    const liElementContainer = createHTMLElement('li','','story-info',ulElement);
    const articleElementInnerContainer = createHTMLElement('article','','',liElementContainer);
    createHTMLElement('h4',`Name: ${firstNameInput.value} ${lastNameInput.value}`,'',articleElementInnerContainer);
    createHTMLElement('p',`Age: ${ageInput.value}`,'',articleElementInnerContainer);
    createHTMLElement('p',`Title: ${storyTitleInput.value}`,'',articleElementInnerContainer);
    createHTMLElement('p',`Genre: ${selectMenuElement.value}`,'',articleElementInnerContainer);
    createHTMLElement('p',textAreaElement.value,'',articleElementInnerContainer);
    const saveButton = createHTMLElement('button','Save Story','save-btn',liElementContainer);
    const editButton = createHTMLElement('button','Edit Story','edit-btn',liElementContainer);
    const deleteButton = createHTMLElement('button','Delete Story','delete-btn',liElementContainer);
    saveButton.disabled = false;
    editButton.disabled = false;
    deleteButton.disabled = false;
    editButton.addEventListener('click',edit);
    saveButton.addEventListener('click',save);
    deleteButton.addEventListener('click',deleteStory);
    event.target.disabled = true;
    inputElements.forEach((input)=>input.value="");
    textAreaElement.value = "";
  }


  function edit(e){
   const [namesElement,ageElement,titleElement,genreElement, contentElement] = Array.from(e.target.parentElement.children[0].children);
   
   const [firstName,lastName] = namesElement.textContent.slice(namesElement.textContent.indexOf(':') + 2).split(' ');
   inputElements[0].value = firstName;
   inputElements[1].value = lastName;
   inputElements[2].value = ageElement.textContent.slice(namesElement.textContent.indexOf(':') + 1).trim();
   inputElements[3].value = titleElement.textContent.slice(namesElement.textContent.indexOf(':') + 2).trim();
   textAreaElement.value = contentElement.textContent;
  
   buttonElement.disabled = false;
   Array.from(e.target.parentElement.children).forEach((button,index)=>{
    if(index!==0){
      button.disabled = true;
    }
   });
   e.target.parentElement.remove();
   
  }
  function save(){
   mainDivElement.innerHTML = '';
   createHTMLElement('h1','Your scary story is saved!','',mainDivElement);
  }
  function deleteStory(e){
    buttonElement.disabled = false;
    e.target.parentElement.remove();
  }

  function createHTMLElement(typeOfElement, content, classToAdd, parentElement){
    const element = document.createElement(typeOfElement);
    if(content){
      element.textContent = content;
    }
    if(classToAdd){
      element.className = classToAdd;
    }
    if(parentElement){
      parentElement.appendChild(element);
    }
    return element;
  }
}
