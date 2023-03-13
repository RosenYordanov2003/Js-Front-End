function army(array) {
  let leaderObject = {};
  for (let index = 0; index < array.length; index++) {
    if (array[index].includes("arrives")) {
      const cmdIndex = array[index].indexOf("arrives");
      const leaderName = array[index].slice(0, cmdIndex).trim();
      addLeader(leaderName);
    } else if (array[index].includes("defeated")) {
      const cmdIndex = array[index].indexOf("defeated");
      const leaderName = array[index].slice(0, cmdIndex).trim();
      removeLeader(leaderName);
    } else if (array[index].includes("+")) {
      const [armyName, armyCount] = array[index].split(" + ");
      addArmyCount(armyName, armyCount);
    } else {
      const dotIndex = array[index].indexOf(":");
      const leaderName = array[index].slice(0, dotIndex);
      const tokens = array[index].slice(dotIndex + 1);
      const [armyName, armyCount] = tokens.split(", ");
      addArmy(leaderName, armyName, armyCount);
    }
  }
  printResult();

  function addLeader(leader) {
    if (!leaderObject.hasOwnProperty(leader)) {
      leaderObject[leader] = { leaderName: leader, armies: [] };
    }
  }
  function addArmy(leaderName, armyName, armyCount) {
    const trimmedArmyName = armyName.trim();
    if (leaderObject.hasOwnProperty(leaderName)) {
      leaderObject[leaderName].armies.push({
        name: trimmedArmyName,
        count: Number(armyCount),
      });
    }
  }

  function addArmyCount(armyName, armyCount) {
    for (const leader in leaderObject) {
      const armyToFind = leaderObject[leader].armies.find(
        (a) => a.name === armyName
      );
      if (armyToFind) {
        armyToFind.count += Number(armyCount);
        break;
      }
    }
  }

  function removeLeader(leader) {
    if (leaderObject.hasOwnProperty(leader)) {
      delete leaderObject[leader];
    }
  }

  function printResult() {
    const keys = Object.keys(leaderObject).sort((leaderA, leaderB) => {
      const leaderBArmySum = sumTotalArmy(leaderObject[leaderB].armies);
      const leaderAArmySum = sumTotalArmy(leaderObject[leaderA].armies);
      return leaderBArmySum - leaderAArmySum;
    });
    for (let index = 0; index < keys.length; index++) {
      const totalArmyCount = sumTotalArmy(leaderObject[keys[index]].armies);
      console.log(`${[keys[index]]}: ${totalArmyCount}`);
      leaderObject[keys[index]].armies.sort(
        (armyA, armyB) => armyB.count - armyA.count
      ).forEach(army => {
        console.log(`>>> ${army.name} - ${army.count}`);
      });;
    }
  }
  function sumTotalArmy(array) {
    const sum = array.reduce((startValue, currentValue) => {
      return startValue + Number(currentValue.count);
    }, 0);
    return sum;
  }
}
army([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
