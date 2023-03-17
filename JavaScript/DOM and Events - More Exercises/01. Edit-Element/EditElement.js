function editElement(...array) {
 const element = array[0];
 while(element.textContent.includes(array[1])){
    element.textContent = element.textContent.replace(array[1],array[2]);
 }
}