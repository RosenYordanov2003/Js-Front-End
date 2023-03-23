function solve() {
  const spanElement = document.querySelector("#info span");
  const departButton = document.getElementById("depart");
  const arriveButton = document.getElementById("arrive");
  const baseUrl = "http://localhost:3030/jsonstore/bus/schedule/";
  let stopObject = {nextStop:"depot"}
  let stopId = stopObject.nextStop;
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
      .catch(() => {
        spanElement.textContent = "Error";
        arriveButton.disabled = true;
        departButton.disabled = true;
      });
  }
  async function arrive() {
    spanElement.textContent = `Arriving at ${stopObject[stopId]}`
    arriveButton.disabled = true;
    departButton.disabled = false;
  }


  return {
    depart,
    arrive,
  };
}

let result = solve();
