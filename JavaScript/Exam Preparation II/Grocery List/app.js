let globalProductObject = {};
const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
const loadButton = document.getElementById("load-product");
const tbodyElement = document.getElementById("tbody");
const addButton = document.getElementById("add-product");
const updateProductButton = document.getElementById("update-product");
updateProductButton.addEventListener("click", update);
loadButton.addEventListener("click", load);
addButton.addEventListener("click", addProduct);
let globalId = 0;
async function load(event) {
  if (event) {
    event.preventDefault();
  }
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    tbodyElement.innerHTML = "";
    updateProductButton.disabled = true;
    addButton.disabled = false;
    clearInputs();
    Object.values(data).forEach((obj) => {
      globalProductObject[obj.product] = obj._id;
      const tableRow = createHTMLElement("tr", "", tbodyElement, "");
      createHTMLElement("td", `${obj.product}`, tableRow, "name");
      createHTMLElement("td", `${obj.count}`, tableRow, "count-product");
      createHTMLElement("td", `${obj.price}`, tableRow, "product-price");
      const tdContainer = createHTMLElement("td", ``, tableRow, "btn");
      const updateButton = createHTMLElement(
        "button",
        "Update",
        tdContainer,
        "update"
      );
      updateButton.addEventListener("click", getUpdateProductInfo);
      const deleteButton = createHTMLElement(
        "button",
        "Delete",
        tdContainer,
        "delete"
      );
      deleteButton.addEventListener("click", deleteProduct);
    });
  } catch (error) {
    console.error(error);
  }
}

async function addProduct(event) {
  if (event) {
    event.preventDefault();
  }
  let bodyObject = {
    product: document.getElementById("product").value,
    count: document.getElementById("count").value,
    price: document.getElementById("price").value,
  };
  const headers = {
    method: "POST",
    "Content-type": "application/json",
    body: JSON.stringify(bodyObject),
  };
  try {
    await fetch(BASE_URL, headers).then(() => load());
  } catch (error) {
    console.error(error);
  }
}

function deleteProduct(event) {
  const id =
    globalProductObject[
      event.target.parentElement.parentElement.children[0].textContent
    ];
  fetch(`${BASE_URL}${id}`, { method: "DELETE" })
    .then(() => load())
    .catch((error) => console.error(error));
}

function getUpdateProductInfo(event) {
  let productName = event.target.parentElement.parentElement.children[0].textContent;
  globalId = globalProductObject[productName];
  updateProductButton.disabled = false;
  addButton.disabled = true;
  let productValues = Array.from(event.target.parentElement.parentElement.children);
  Array.from(document.querySelectorAll('.list input'))
    .forEach((input,index)=>input.value = productValues[index].textContent);
}

async function update() {
  let bodyObject = {
    product: document.getElementById("product").value,
    count: document.getElementById("count").value,
    price: document.getElementById("price").value,
  };
  const headers = {
    method: "PATCH",
    "Content-type": "application/json",
    body: JSON.stringify(bodyObject),
  };
  try {
    await fetch(`${BASE_URL}${globalId}`,headers)
    .then(()=>load());
  } catch (error) {
    console.error(error);
  }
}

function clearInputs(){
    Array.from(document.querySelectorAll('.list input'))
    .forEach((input)=>input.value ='');
}

function createHTMLElement(typeOfElement, content, parent, className) {
  const element = document.createElement(typeOfElement);
  if (content) {
    element.textContent = content;
  }
  if (className) {
    element.classList.add(className);
  }
  if (parent) {
    parent.appendChild(element);
  }

  return element;
}
