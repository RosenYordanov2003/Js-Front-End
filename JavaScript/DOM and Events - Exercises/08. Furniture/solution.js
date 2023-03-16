function solve() {
  const generateButtonElement = document.querySelector("#exercise button");
  generateButtonElement.addEventListener("click", createFurniture);
  const buyButton = document.querySelectorAll('button')[1];
  buyButton.addEventListener('click',buy)
  console.log(buyButton);

  function createFurniture() {
    const textAreaElement = document.querySelector("#exercise textarea");
    const tableBodyElement = document.querySelector('tbody');
    let values = JSON.parse(textAreaElement.value);
   
    for (let index = 0; index < values.length; index++) {

        const tableRow = document.createElement('tr');
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src',values[index].img);
        const tdImgElement = document.createElement('td');
        tdImgElement.appendChild(imgElement);
        tableRow.appendChild(tdImgElement);
        tableBodyElement.appendChild(tableRow);
        
        const pForFurniture = document.createElement('p');
        pForFurniture.textContent = values[index].name;
        const tdNameElement = document.createElement('td');
        tdNameElement.appendChild(pForFurniture);
        tableRow.appendChild(tdNameElement);

        const priceForFurniture = document.createElement('p');
        priceForFurniture.textContent = values[index].price;
        const tdPriceElement = document.createElement('td');
        tdPriceElement.appendChild(priceForFurniture);
        tableRow.appendChild(tdPriceElement);

        const decFactorForFurniture = document.createElement('p');
        decFactorForFurniture.textContent = values[index].decFactor;
        const decFactorPriceElement = document.createElement('td');
        decFactorPriceElement.appendChild(decFactorForFurniture);
        tableRow.appendChild(decFactorPriceElement);

        const inputElement = document.createElement('input');
        inputElement.setAttribute('type','checkbox');
        const tdInput = document.createElement('td');
        tdInput.appendChild(inputElement);
        tableRow.appendChild(tdInput);
        tableBodyElement.appendChild(tableRow);
    }
  }

  function buy(){
    let countBoughtFurniture = 0;
    let boughtFurnitureNames = [];
    let totalPrice = 0;
    let averageDefactor = 0;
  
    Array.from(document.querySelectorAll('tbody tr')).forEach((row)=>{
      
      checkbox = row.querySelector('td:nth-child(5) input');
      if(checkbox.checked){
        const furnitureName = row.querySelector('td:nth-child(2) p').textContent;
        const price = row.querySelector('td:nth-child(3) p').textContent;
        const defactor = row.querySelector('td:nth-child(4) p').textContent;
        boughtFurnitureNames.push(furnitureName);
        countBoughtFurniture++;
        totalPrice+=Number(price);
        averageDefactor+=Number(defactor);
      }
    });
    averageDefactor/=countBoughtFurniture;
    const textAreaOutput = document.querySelectorAll('textarea')[1];
    textAreaOutput.textContent = `Bought furniture: ${boughtFurnitureNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDefactor}`;
  }
}
