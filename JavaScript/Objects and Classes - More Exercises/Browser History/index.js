function browserHistory(object, array) {
  let browserObject = {};
  browserObject.openTabs = [];
  browserObject.browserLogs = [];
  browserObject.recentlyClosedTabs = [];
  const keys = Object.keys(object);
  for (let index = 0; index < keys.length; index++) {
    if (keys[index] === "Browser Name") {
      browserObject.name = object[keys[index]];
    } else if (keys[index] === "Open Tabs") {
      const openTabs = object[keys[index]];
      openTabs.forEach((tab) => {
        browserObject.openTabs.push(tab);
      });
    } else if (keys[index] === "Recently Closed") {
      const recentlyCloseTabs = object[keys[index]];
      recentlyCloseTabs.forEach((tab) => {
        browserObject.recentlyClosedTabs.push(tab);
      });
    } else {
      const currentBrowserLogs = object[keys[index]];
      currentBrowserLogs.forEach((log) => browserObject.browserLogs.push(log));
    }
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index].includes("Clear History and Cache")) {
      browserObject.openTabs.splice(0, browserObject.openTabs.length);
      browserObject.recentlyClosedTabs.splice(
        0,
        browserObject.recentlyClosedTabs.length
      );
      browserObject.browserLogs.splice(0, browserObject.browserLogs.length);
      continue;
    }
    const tokens = array[index].split(" ");
    const action = tokens[0];
    const tab = tokens.slice(1).join(" ");

    if (action === "Open") {
      openTab(tab, tokens);
    } else {
      removeTab(tab, tokens);
    }
  }
  printResult();

  function openTab(tab, tokens) {
    browserObject.openTabs.push(tab);
    browserObject.browserLogs.push(tokens.join(" "));
  }
  function removeTab(tab, tokens) {
    if (browserObject.openTabs.includes(tab)) {
      let index = browserObject.openTabs.indexOf(tab);
      while (index > -1) {
        browserObject.openTabs.splice(index, 1);
        browserObject.recentlyClosedTabs.push(tab);
        index = browserObject.openTabs.indexOf(tab);
        browserObject.browserLogs.push(tokens.join(" "));
      }
    }
  }
  function printResult() {
    console.log(browserObject.name);
    console.log(`Open Tabs: ${browserObject.openTabs.join(", ")}`);
    console.log(
      `Recently Closed: ${browserObject.recentlyClosedTabs.join(", ")}`
    );
    console.log(`Browser Logs: ${browserObject.browserLogs.join(", ")}`);
  }
}
browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
