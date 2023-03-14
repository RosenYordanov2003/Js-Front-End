function focused() {
 const inputElements = document.querySelectorAll('div input');
 Array.from(inputElements).forEach((element)=>{
  element.addEventListener("focus", (event) => {
    event.target.parentElement.style.background = "gray";
    event.target.parentElement.setAttribute('class','focused');

    element.addEventListener("blur", (event) => {
      event.target.parentElement.style.background = "white";
      event.target.parentElement.removeAttribute('class');
    });
  });
 });
}