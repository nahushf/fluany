import { saveInLocal } from 'store/LocalStore'
chrome.manifest = chrome.app.getDetails();

var injectIntoTab = function (tab) {
  const scripts = chrome.manifest.content_scripts[0].js;
  let i = 0,
      s = scripts.length;
  for( ; i < s; i++ ) {
    chrome.tabs.executeScript(tab.id, {
      file: scripts[i]
    });
  }
}

chrome.runtime.onInstalled.addListener(() => {
  console.log('now')
  chrome.windows.getAll({
    populate: true
  }, function (windows) {
    var i = 0, w = windows.length, currentWindow;
    for( ; i < w; i++ ) {
      currentWindow = windows[i];
      var j = 0, t = currentWindow.tabs.length, currentTab;
      for( ; j < t; j++ ) {
        currentTab = currentWindow.tabs[j];
        // Skip chrome://
        if( ! currentTab.url.match(/(chrome):\/\//gi) ) {
          injectIntoTab(currentTab);
        }
      }
    }
  });
})
