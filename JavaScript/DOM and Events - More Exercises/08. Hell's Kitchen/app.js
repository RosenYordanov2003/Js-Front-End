function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  function onClick() {
   
    const textArea = document.querySelector("#inputs textarea");
    let array = JSON.parse(textArea.value);
    let restaurants = {};
    for (let index = 0; index < array.length; index++) {
      const [restaurantName, workersArray] = array[index].split(" - ");
      if (!restaurants.hasOwnProperty(restaurantName)) {
        restaurants[restaurantName] = { workers: [] };
      }
      const workersInfo = workersArray.split(", ");
      for (const workerInfo of workersInfo) {
        const [workerName, workerSalary] = workerInfo.split(" ");
        restaurants[restaurantName].workers.push({ workerName, workerSalary });
      }
    }

    const keys = Object.keys(restaurants);
    for (let index = 0; index < keys.length; index++) {
      restaurants[keys[index]].averageSalary = calculateAverageSalary(
        restaurants[keys[index]].workers
      );
      restaurants[keys[index]].bestSalary = restaurants[
        keys[index]
      ].workers.sort(
        (workerA, workerB) =>
          Number(workerB.workerSalary) - Number(workerA.workerSalary)
      )[0].workerSalary;
    }

    setResult(restaurants);
  }
  function calculateAverageSalary(workerArray) {
    let averageSum = workerArray.reduce((startValue, currentValue) => {
      return startValue + Number(currentValue.workerSalary);
    }, 0);
    return averageSum / workerArray.length;
  }

  function setResult(restaurants) {
    const restaurantPElement = document.querySelector("#bestRestaurant p");

    const workerElement = document.querySelector("#workers p");

    const bestRestaurant = Object.keys(restaurants).sort(
      (restaurantA, restaurantB) =>
        Number(restaurants[restaurantB].averageSalary) - Number(restaurants[restaurantA].averageSalary)
    )[0];
    const firstResult = `Name: ${bestRestaurant} Average Salary: ${Number(
      restaurants[bestRestaurant].averageSalary
    ).toFixed(2)} Best Salary: ${Number(
      restaurants[bestRestaurant].bestSalary
    ).toFixed(2)}`;

    restaurantPElement.textContent = firstResult;

    restaurants[bestRestaurant].workers
      .sort(
        (workerA, workerB) =>
          Number(workerB.workerSalary) - Number(workerA.workerSalary)
      )
      .forEach((worker) => {
        workerElement.textContent += `Name: ${
          worker.workerName
        } With Salary: ${worker.workerSalary} `;
      });
  }
}
