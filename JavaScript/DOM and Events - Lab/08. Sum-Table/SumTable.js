function sumTable() {
  const tableElements = document.querySelectorAll(
    "table tr:not(:last-child) td:nth-child(2)"
  );
  let value = 0;
  Array.from(tableElements).forEach((t) => {
    value += Number(t.textContent);
  });
  let sumTableElement = document.getElementById("sum");
  sumTableElement.textContent = value;
}
