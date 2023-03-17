function extract(content) {
  const element = document.getElementById(content);
  let value = element.textContent;
  let outputArray = [];
  for (let index = 0; index < value.length; index++) {
    if(value[index]==='('){
        let closedIndex = value.indexOf(')');
        let word = value.substring(index + 1,closedIndex);
        outputArray.push(word);
        value = value.replace(value[closedIndex], '');
    }     
  }
  return outputArray.join('; ')
}