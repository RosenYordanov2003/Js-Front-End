function deleteByEmail() {
  const inputElement = document.querySelector(`label input`);
  const tableElement = document.getElementById(`customers`);
  let tableElements = document.querySelectorAll(`tbody td:nth-child(2)`);
  let isFind = false;

  Array.from(tableElements).forEach((t, index) => {
    if (t.textContent === inputElement.value) {
      tableElement.deleteRow(index + 1);
      isFind = true;
    }
  });
  
  if (!isFind) {
    const divElement = document.getElementById(`result`);
    divElement.textContent = "Not found.";
  }
}
