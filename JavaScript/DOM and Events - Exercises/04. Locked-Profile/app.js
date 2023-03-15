function lockedProfile() {
  const buttonElements = document.querySelectorAll(".profile button");

  Array.from(buttonElements).forEach((button) => {
    button.addEventListener("click", toggle);
  });

  function toggle(e) {
    const profile = e.target.parentElement;
    let isActive = profile.querySelector("input[value =unlock]").checked;
    const infoElement = profile.querySelector('div');
    if(isActive &&e.target.textContent==='Show more'){
        infoElement.style.display = 'block';
        e.target.textContent = 'Hide it'
    }
    else{
        if(isActive){
            infoElement.style.display = 'none';
            e.target.textContent = 'Show more'
        }
    }
  }
}
