window.addEventListener("load", solve);

function solve() {
 let inputObject = {
  title: document.getElementById('post-title'),
  category: document.getElementById('post-category'),
  content: document.getElementById('post-content')
 };
 
 let currentObject = {};

 const publishButtonElement = document.getElementById('publish-btn');
 publishButtonElement.addEventListener('click',publish);
 const clearButton = document.getElementById('clear-btn');
 clearButton.addEventListener('click', clear);

 function publish(){
  
  if(Object.values(inputObject).filter((input) => input.value.length < 1).length > 0){
   return;
  }

  const ulElement = document.getElementById('review-list');
  let liElement = createHTMLElement('li','',['rpost'],ulElement);
  let articleElement = createHTMLElement('article','','',liElement);
  createHTMLElement('h4',inputObject['title'].value, '', articleElement);
  createHTMLElement('p',`Category: ${inputObject['category'].value}`, '' ,articleElement);
  createHTMLElement('p',`Content: ${inputObject['content'].value}`, '', articleElement);

  const editBtn = createHTMLElement('button','Edit',['action-btn','edit'], liElement);
  editBtn.addEventListener('click', edit);
  const approveButton = createHTMLElement('button','Approve',['action-btn', 'approve'], liElement);
  approveButton.addEventListener('click', approve)

  currentObject = {
    title: inputObject['title'].value,
    category: inputObject['category'].value,
    content: inputObject['content'].value,
  }

  Object.values(inputObject).forEach((input) => input.value = '');
 }

 function edit(event){
   event.target.parentElement.remove();
   for (const key in currentObject) {
     inputObject[key].value = currentObject[key];
   }
 }

 function approve(event){

  let ulElement = document.getElementById('published-list');
  let liElement = createHTMLElement('li','',['rpost'],ulElement);
  let articleElement = createHTMLElement('article','','',liElement);
  createHTMLElement('h4',event.target.parentElement.children[0].children[0].textContent, '', articleElement);
  createHTMLElement('p',`Category: ${event.target.parentElement.children[0].children[1].textContent}`, '' ,articleElement);
  createHTMLElement('p',`Content: ${event.target.parentElement.children[0].children[2].textContent}`, '', articleElement);
  event.target.parentElement.remove();
 }

 function clear(){
   document.getElementById('published-list').innerHTML = '';
 }

 function createHTMLElement(typeOfElement, content, classArray, parentElement){
  const element = document.createElement(typeOfElement);
  if(content){
    element.textContent = content;
  }
  if(classArray){
    console.log(classArray);
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
