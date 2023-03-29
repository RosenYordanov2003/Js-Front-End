window.addEventListener("load", solve);

function solve() {
  const inputElements = Array.from( document.querySelectorAll("#append-song input"));
  const buttonElement = document.getElementById("add-btn");
  const divElement = document.querySelector("#all-hits > div");
  const totalLikesContainer = document.querySelector('#total-likes .likes');
  const savedSongsDivElement = document.querySelector('#saved-hits .saved-container')
  let dotIndex = totalLikesContainer.children[0].textContent.indexOf(':');
  let currentLikes = Number(totalLikesContainer.children[0].textContent.slice(dotIndex + 2));
  console.log(currentLikes);
  buttonElement.addEventListener("click", addSong);

  function addSong(event) {
    if(event){
      event.preventDefault();
    }
    if(inputElements.filter((input)=>input.value.length < 1).length >0){
      inputElements.forEach((input)=>input.value = '');
      return;
    }
    for (let index = 0; index < inputElements.length; index++) {
      const containerElement = createHtmlElement("div", "", divElement,"hits-info"  );
      createHtmlElement('img','',containerElement,'',{src:"./static/img/img.png"});
      const genreContent = `Genre: ${inputElements[index].value}`;
      createHtmlElement("h2", genreContent, containerElement);
      const nameContent = `Name: ${inputElements[index + 1].value}`;
      createHtmlElement("h2", nameContent, containerElement);
      const authorContent = `Author: ${inputElements[index + 2].value}`;
      createHtmlElement("h2", authorContent, containerElement);
      const dateContent = `Date: ${inputElements[index + 3].value}`;
      createHtmlElement("h3", dateContent, containerElement);
      const saveButton = createHtmlElement("button", "Save song", containerElement, "save-btn");
      const likeButton = createHtmlElement("button", "Like song", containerElement, "like-btn");
      const deleteButton =  createHtmlElement("button", "Delete", containerElement, "delete-btn");
       deleteButton.addEventListener('click',deleteSong)
       saveButton.addEventListener('click',save);
       likeButton.addEventListener('click',like)
       inputElements.forEach((input)=>input.value = '');
      break;
    }
  }

  function like(event){
    event.target.disabled = true;
    currentLikes++;
    totalLikesContainer.children[0].textContent = `Total Likes: ${currentLikes}`;
  }

  function save(event){
   
    const divContainer = createHtmlElement('div','',savedSongsDivElement,'hits-info');
    const children = Array.from(event.target.parentElement.children);
    for (let index = 0; index < 5; index++) {
      divContainer.appendChild(children[index]);
    }
    divContainer.appendChild(children[7]);
    event.target.parentElement.remove();
  }

  function createHtmlElement(typeOfElement, content, parentElement, className, attributes) {
    const element = document.createElement(typeOfElement);
    if (content) {
      element.textContent = content;
    }
    if (parentElement) {
      parentElement.appendChild(element);
    }
    if (className) {
      element.classList.add(className);
    }
    if(attributes){
      for (const key in attributes) {
        element.setAttribute(key,attributes[key]);
      }
    }
    return element;
  }
  function deleteSong(event){
   event.target.parentElement.remove();
  }
}
