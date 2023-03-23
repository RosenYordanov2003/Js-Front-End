function getInfo() {
  const inputElement = document.getElementById("stopId");
  const divNameResult = document.getElementById("stopName");
  const bussUlElement = document.getElementById("buses");
  const busId = inputElement.value;
  const baseUrl = "http://localhost:3030/jsonstore/bus/businfo/";
  bussUlElement.textContent ='';
  fetch(`${baseUrl}${busId}`)
    .then((res) => res.json())
    .then((data) => {
      divNameResult.textContent = data.name;
      const entries = Object.entries(data.buses);
      for (const [key, value] of entries) {
        const liElement = document.createElement('li');
        liElement.textContent = `Bus ${key} arrives in ${value} minutes`;
        bussUlElement.appendChild(liElement);
      }
    })
    .catch(()=>{
       divNameResult.textContent = 'Error';
    });
}
