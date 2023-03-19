function search() {
  const townElements = document.querySelectorAll('#towns li');
  const inputElement = document.getElementById('searchText');
  const divResult = document.getElementById('result');
  let countMatches = 0;
  Array.from(townElements).forEach((town)=>{
     if(town.textContent.includes(inputElement.value)){
      countMatches++;
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
     }
  });
  divResult.textContent = `${countMatches} matches found`;
  inputElement.textContent = '';
}
