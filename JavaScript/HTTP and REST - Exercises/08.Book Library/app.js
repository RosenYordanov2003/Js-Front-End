function attachEvents() {
  let globalObject = {};
  let id = null;
  const baseURL = "http://localhost:3030/jsonstore/collections/books";
  const loadButtonElement = document.getElementById("loadBooks");
  const tbodyElement = document.querySelector("tbody");
  const submitButton = document.querySelector("#form button");
  const h3Element = document.querySelector("#form h3");
  submitButton.addEventListener("click", create);
  loadButtonElement.addEventListener("click", loadBooks);

  async function loadBooks() {
    try {
      tbodyElement.textContent = "";
      const response = await fetch(baseURL);
      const data = await response.json();
      Object.keys(data).forEach((key) => {
        globalObject[data[key].title] = key;
        const tableRow = createHTMLElement("tr", "", tbodyElement);
        createHTMLElement("td", data[key].title, tableRow);
        createHTMLElement("td", data[key].author, tableRow);
        const buttonTdContainer = createHTMLElement("td", "", tableRow);
        const editButtonElement = createHTMLElement(
          "button",
          "Edit",
          buttonTdContainer
        );
        const deleteButtonElement = createHTMLElement(
          "button",
          "Delete",
          buttonTdContainer
        );
        editButtonElement.addEventListener("click", editElement);
        deleteButtonElement.addEventListener("click", deleteElement);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function create() {
    const inputs = Array.from(document.querySelectorAll("#form input"));
    let inputValues = inputs.map((input) => input.value);
    if (inputValues.filter((value) => value.le === "").length > 0) {
      clearInputs();
      return;
    }
    let bodyObject = {
      author: inputValues[1],
      title: inputValues[0],
    };
    if (h3Element.textContent === "FORM") {
      try {
        fetch(baseURL, {
          method: "POST",
          "Content-type": "application/json",
          body: JSON.stringify(bodyObject),
        }).then(() => {
          loadBooks();
          clearInputs(inputs);
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      
      try {
        fetch(`${baseURL}/${id}`, {
          method: "PUT",
          "Content-type": "application/json",
          body: JSON.stringify(bodyObject),
        }).then(() => {
          h3Element.textContent = "FORM";
          submitButton.textContent = "Submit";
          loadBooks();
          clearInputs(inputs);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function editElement(event) {
    let title = event.target.parentElement.parentElement.children[0].textContent;
    let author = event.target.parentElement.parentElement.children[1].textContent;
    const [titleInput, authorInput] = Array.from(document.querySelectorAll("#form input"));
    authorInput.value = author;
    titleInput.value = title;
    id = globalObject[title];
    h3Element.textContent = "Edit FORM";
    submitButton.textContent = "Save";
  }

  async function deleteElement(event) {
    let title = event.target.parentElement.parentElement.children[0].textContent;
    const id = globalObject[title];
    try {
      fetch(`${baseURL}/${id}`, { method: "DELETE" }).then(() => {
        loadBooks();
      });
    } catch (error) {
      console.log(error);
    }
  }

  function createHTMLElement(typeOfElement, content, parent) {
    const element = document.createElement(typeOfElement);
    if (content) {
      element.textContent = content;
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
  function clearInputs(inputs){
    inputs.forEach((x=>x.value =''));
  }
}
attachEvents();
