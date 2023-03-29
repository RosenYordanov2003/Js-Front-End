function solve(array) {
  let initialItems = array[0].split("!");
  let index = 1;
  let lines = "";
  while (!lines.includes("Go Shopping!")) {
    lines = array[index];
    const tokens = lines.split(" ");
    const operation = tokens[0];
    if (operation === "Urgent") {
      const item = tokens[1];
      if (!initialItems.includes(item)) {
        initialItems.unshift(item);
      }
    } else if (operation === "Unnecessary") {
      const item = tokens[1];
      if (initialItems.includes(item)) {
        const itemIndex = initialItems.indexOf(item);
        initialItems.splice(itemIndex, 1);
      }
    } else if (operation === "Correct") {
      const oldItem = tokens[1];
      const newItem = tokens[2];
      if (initialItems.includes(oldItem)) {
        const oldItemIndex = initialItems.indexOf(oldItem);
        initialItems[oldItemIndex] = newItem;
      }
    } else if (operation === "Rearrange") {
      const item = tokens[1];
      if (initialItems.includes(item)) {
        const itemIndex = initialItems.indexOf(item);
        initialItems.splice(itemIndex, 1);
        initialItems.push(item);
      }
    }
    index++;
  }
  console.log(initialItems.join(", "));
}
solve([
  "Tomatoes!Potatoes!Bread",
  "Urgent Orange",
  "Correct Orange Milk",
  "Go Shopping!",
]);
