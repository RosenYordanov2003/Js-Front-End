function attachEvents() {
  let globalObject = {};
  const baseURL = `http://localhost:3030/jsonstore/tasks/`;
  const loadButtonElement = document.getElementById("load-button");
  const ulElement = document.getElementById("todo-list");
  const addButtonElement = document.getElementById("add-button");
  addButtonElement.addEventListener("click", add);
  loadButtonElement.addEventListener("click", loadAll);

  async function loadAll(event) {
    if (event) {
      event.preventDefault();
    }
    try {
      ulElement.innerHTML = "";
      const response = await fetch(baseURL);
      const data = await response.json();
      Object.values(data).forEach((obj) => {
        globalObject[obj.name] = obj._id;
        const liContainer = createHTMLElement("li", "", ulElement);
        createHTMLElement("span", obj.name, liContainer);
        const removeButton = createHTMLElement("button", "Remove", liContainer);
        const editButton = createHTMLElement("button", "Edit", liContainer);
        removeButton.addEventListener("click", remove);
        editButton.addEventListener("click", edit);
      });
    } catch (error) {
      console.error(error);
    }
  }
  function remove(event) {
    const id = globalObject[event.target.parentElement.children[0].textContent];
    fetch(`${baseURL}${id}`, { method: "DELETE" })
      .then(() => loadAll())
      .catch((error) => console.error(error));
  }

  function edit(event) {
    const id = globalObject[event.target.parentElement.children[0].textContent];
    const parentElement = event.target.parentElement;
    const inputElement = createHTMLElement("input",parentElement.children[0].textContent);
    parentElement.children[0].remove();
    parentElement.prepend(inputElement);
    parentElement.children[2].remove();
    const submitButton = createHTMLElement("button", "Submit", parentElement);
    submitButton.id = id;
    submitButton.addEventListener("click", submit);
  }

  function add(event) {
    event.preventDefault();
    let bodyObject = {
      name: document.getElementById("title").value,
    };
    const headers = {
      method: "POST",
      "Content-type": "application/json",
      body: JSON.stringify(bodyObject),
    };
    fetch(baseURL, headers).then(() => {
      loadAll();
      document.getElementById("title").value = "";
    });
  }

  function submit(event) {
    let bodyObject = {
      name: event.target.parentElement.children[0].value,
    };
    const headers = {
      method: "PATCH",
      "Content-type": "application/json",
      body: JSON.stringify(bodyObject),
    };
    fetch(`${baseURL}${event.target.id}`, headers)
      .then(() => loadAll())
      .catch((error) => console.error(error));
  }

  function createHTMLElement(typeOfElement, content, parentElement) {
    const element = document.createElement(typeOfElement);
    if (typeOfElement === "input" && content) {
      element.value = content;
      element.setAttribute("value", content);
    }
    if (content && typeOfElement !== "input") {
      element.textContent = content;
    }
    if (parentElement) {
      parentElement.appendChild(element);
    }
    return element;
  }
}

attachEvents();
