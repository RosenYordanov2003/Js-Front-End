function catalogue(array) {
  const categories = {};
  for (let index = 0; index < array.length; index++) {
    const [productName, productPrice] = array[index].split(' : ');
    if (!categories.hasOwnProperty(productName[0])) {
      categories[productName[0]] = [];
    }
    categories[productName[0]].push({productName, price: Number(productPrice)});
  }
const keys = Object.keys(categories).sort((a,b)=>a.localeCompare(b));
for (let index = 0; index < keys.length; index++) {
  console.log(keys[index]);  
  categories[keys[index]].sort((productA,productB)=>productA.productName.localeCompare(productB.productName)).forEach(product => {
    console.log(`  ${product.productName}: ${product.price}`);
  }); 
}
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
