function storeProvision(firstArray, secondArray) {
  let products = {};
  for (let index = 0; index < firstArray.length; index += 2) {
    products[firstArray[index]] = Number(firstArray[index + 1]);
  }
  for (let index = 0; index < secondArray.length; index+=2) {
    if (products.hasOwnProperty(secondArray[index])) {
      products[secondArray[index]] += Number(secondArray[index + 1]);
    } else {
      products[secondArray[index]] = Number(secondArray[index + 1]);
    }
  }
  const entries = Object.entries(products);
 
  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
