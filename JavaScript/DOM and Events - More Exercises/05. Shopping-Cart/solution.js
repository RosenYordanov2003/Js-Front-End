function solve() {
  let boughtProducts = [];
  const textAreaElement = document.querySelector('textarea');
  const buttonElements = document.querySelectorAll('.shopping-cart .product .product-add .add-product');
  Array.from(buttonElements).forEach((button)=>{
   button.addEventListener('click', buyProduct)
  });

  const checkOutElement = document.querySelector('.checkout');
  checkOutElement.addEventListener('click', finalizeOrder);

  function buyProduct(e){
   const productName = e.target.parentElement.parentElement.querySelector('.product-details .product-title').textContent;
   const productPrice = Number(e.target.parentElement.parentElement.querySelector('.product-line-price').textContent);
   boughtProducts.push({name : productName, price : productPrice});
   textAreaElement.textContent+=`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
  }

  function finalizeOrder(){
   let totalPrice = 0;

    let productNames = new Set();
    for (let index = 0; index < boughtProducts.length; index++) {
      const currentElement = boughtProducts[index];
      totalPrice+=currentElement.price;
      productNames.add(currentElement.name);
    }
    let productNamesAsArray = Array.from(productNames);
    textAreaElement.textContent+=`You bought ${productNamesAsArray.join(', ')} for ${totalPrice.toFixed(2)}.`
    
     disableButtons();
  }
  function disableButtons(){
    Array.from(document.querySelectorAll('button')).forEach((button)=>{
      button.disabled = true;
    });
  }
}