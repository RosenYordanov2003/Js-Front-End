function addItem() {
  const ulElement = document.getElementById("items");
  const inputElement = document.getElementById("newItemText");
  let newItem = document.createElement('li');
  newItem.textContent = inputElement.value;

  let deleteElement = document.createElement('a');
  deleteElement.href = '#';
  deleteElement.textContent = '[Delete]'
   deleteElement.addEventListener('click', (e)=>{
   e.currentTarget.parentElement.remove();
   });
  newItem.appendChild(deleteElement);
  ulElement.appendChild(newItem);
}
