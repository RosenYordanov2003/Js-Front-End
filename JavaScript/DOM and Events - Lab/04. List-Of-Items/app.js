function addItem() {
  const ulElement = document.getElementById('items');
  const inputElement = document.getElementById(`newItemText`);
  const newChild = document.createElement(`li`);
  newChild.textContent = inputElement.value;
  ulElement.appendChild(newChild);
}