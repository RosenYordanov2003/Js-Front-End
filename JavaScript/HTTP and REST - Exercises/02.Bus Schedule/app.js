function solve() {
  const spanElement = document.querySelector("#info span");
  const departButton = document.getElementById("depart");
  const arriveButton = document.getElementById("arrive");
  const baseUrl = "http://localhost:3030/jsonstore/bus/schedule/";
  let stopObject = {nextStop:"depot"}
  let stopId = 'depot';
  function depart() {
    fetch(`${baseUrl}${stopId}`)
      .then((res) => res.json())
      .then((data) => {
        stopObject.nextStop = data.next;
        spanElement.textContent = `Next stop ${data.name}`;
        stopObject[stopId] = data.name;
        arriveButton.disabled = false;
        departButton.disabled = true;
      })
      .catch((error) => {
        spanElement.textContent = "Error";
        arriveButton.disabled = true;
        departButton.disabled = true;
        console.log(console.error(error));
      });
  }
  async function arrive() {
    spanElement.textContent = `Arriving at ${stopObject[stopId]}`
    arriveButton.disabled = true;
    departButton.disabled = false;
    stopId = stopObject.nextStop;
  }


  return {
    depart,
    arrive,
  };
}

let result = solve();
