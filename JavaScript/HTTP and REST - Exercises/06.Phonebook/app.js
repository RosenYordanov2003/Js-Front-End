function attachEvents() {
  let globalObject = {};
  const baseURL = "http://localhost:3030/jsonstore/phonebook";
  const loadButtonElement = document.getElementById("btnLoad");
  const createButtonElement = document.getElementById("btnCreate");
  const ulElement = document.getElementById("phonebook");
  loadButtonElement.addEventListener("click", load);
  createButtonElement.addEventListener('click',create);
  async function load() {
    try {
      ulElement.textContent = '';
      const response = await fetch(baseURL);
      const data = await response.json();
      Object.values(data).forEach((x) => {
        const liElement = document.createElement("li");
        liElement.textContent = `${x.person}: ${x.phone}`;
        globalObject[x.person] = x._id;
        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.textContent = "Delete";
        deleteButtonElement.addEventListener("click", deletePerson);
        liElement.appendChild(deleteButtonElement);
        ulElement.appendChild(liElement);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function deletePerson(event) {
    let personName = getName(event.target.parentElement.textContent);
    try {
      await fetch(`${baseURL}/${globalObject[personName]}`,{method:'DELETE'})
      .then(()=>load())
    } catch (error) {
      console.error(error);
    }
  }
  function getName(textContent) {
    const dotIndex = textContent.indexOf(":");
    let personName = textContent.substring(0, dotIndex);
    return personName;
  }
  async function create(){
    const personValue = document.getElementById('person').value;
    const phoneValue = document.getElementById('phone').value;
    const object = {
      person: personValue,
      phone: phoneValue
    }
    try {
      fetch(baseURL,{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(object)
      })
      .then(()=>{
        load();
        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
      })
      
    } catch (error) {
      console.error(error);
    }
  }
}

attachEvents();
