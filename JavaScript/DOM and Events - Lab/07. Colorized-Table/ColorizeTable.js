function colorize() {
  const tableElements = document.querySelectorAll("table tr");
  Array.from(tableElements).forEach((t, index) => {
    if (index % 2 !== 0) {
      t.style.backgroundColor = "Teal";
    }
  });
}
