function solve() {
  const table = document.querySelector("table");
  const paragraphResultElement = document.querySelector("#check p");
  const inputElements = document.querySelectorAll("tbody tr td input");
  const [checkButton, clearButton] = document.getElementsByTagName("button");
  clearButton.addEventListener("click", clear);
  checkButton.addEventListener("click", check);

  function initializeMatrix(values) {
    let matrix = new Array(3);
    for (let index = 0; index < matrix.length; index++) {
      matrix[index] = new Array(3);
    }
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        matrix[row][col] = values[col];
      }
      values.splice(0, 3);
    }
    return matrix;
  }
  function check() {
    let array = [];
    Array.from(inputElements).forEach((element) => array.push(element.value));
    const matrix = initializeMatrix(array);
    let isSudoku = true;
    for (let index = 0; index < matrix.length; index++) {
      let currentRow = matrix[index];
      if (!checkForDuplicates(currentRow)) {
        isSudoku = false;
        break;
      }
      if (index < matrix.length - 1) {
        if (checkRows(currentRow, matrix[index + 1])) {
          isSudoku = false;
          break;
        }
      }
    }
    if (isSudoku) {
      table.style.border = "2px solid green";
      paragraphResultElement.textContent = "You solve it! Congratulations!";
      paragraphResultElement.style.color = "green";
    } else {
      table.style.border = "2px solid red";
      paragraphResultElement.textContent = "NOP! You are not done yet...";
      paragraphResultElement.style.color = "red";
    }
  }

  function checkForDuplicates(row) {
    let set = new Set();
    row.forEach((x) => set.add(x));
    return set.size === row.length;
  }
  function checkRows(row1, row2) {
    let areEqual = false;
    for (let index = 0; index < row1.length; index++) {
      if (row1[index] === row2[index]) {
        areEqual = true;
        return areEqual;
      }
    }
    return areEqual;
  }

  function clear() {
    table.style.border = "none";
    Array.from(inputElements).forEach((element) => (element.value = ""));
    paragraphResultElement.textContent = "";
  }
}
