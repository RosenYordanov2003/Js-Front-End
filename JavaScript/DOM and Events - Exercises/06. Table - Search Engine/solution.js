function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let tdElements = document.querySelectorAll(".container tbody tr td");
    const inputElement = document.getElementById("searchField");
    const inputValue = inputElement.value;
    Array.from(tdElements).forEach((td) => {
      if (td.textContent.includes(inputValue)) {
        td.parentElement.classList.add("select");
      }
    });
    document.getElementById("searchField").value = '';
  }
}

