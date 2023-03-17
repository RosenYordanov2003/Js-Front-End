function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    clear();
    const inputElement = document.getElementById("searchField");
    const inputValue = inputElement.value;

    let tdElements = document.querySelectorAll(".container tbody tr td");
    Array.from(tdElements).forEach((td) => {
      if (td.textContent.includes(inputValue)) {
        td.parentElement.classList.add("select");
      }
    });
  }
  function clear(){
    let trElements = document.querySelectorAll(".container tbody tr ");
    Array.from(trElements).forEach((tr) => {
      tr.classList.remove("select");
    });
  }
}
