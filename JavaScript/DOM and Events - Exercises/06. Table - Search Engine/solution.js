function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let tdElements = document.querySelectorAll(".container tbody tr td");
    const inputElement = document.getElementById("searchField");
    const inputValue = inputElement.value;
    Array.from(tdElements).forEach((td) => {
      td.classList.remove('select')
      if (inputValue && td.textContent.toLowerCase().includes(inputValue.toLowerCase())) {
        td.className = 'select';
      }
    });
    document.getElementById("searchField").value = "";
  }
}
