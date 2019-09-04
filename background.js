chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


// https://stackoverflow.com/questions/5193350/chrome-extension-append-functions-to-right-click-menu
// https://stackoverflow.com/questions/32718645/google-chrome-extension-add-the-tab-to-context-menu
chrome.contextMenus.create({
  id: "tabarnak",
  title: "Surlignez s'il vous plaît",
  contexts:["selection"],  // ContextType
  // onclick: high // A callback function
 });

 chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "tabarnak") {
    chrome.tabs.executeScript(null, {file: "content.js"});
  }
});