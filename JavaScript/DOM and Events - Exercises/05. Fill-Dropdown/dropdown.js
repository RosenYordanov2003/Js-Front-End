function addItem() {
  let itemTextElement = document.getElementById("newItemText");
  let itemValue = document.getElementById("newItemValue");

  const menuElement = document.getElementById("menu");

  let option = document.createElement("option");

  option.textContent = itemTextElement.value;
  option.value = itemValue.value;
  menuElement.appendChild(option);

  document.getElementById("newItemText").value = "";
  document.getElementById("newItemValue").value = "";
}
